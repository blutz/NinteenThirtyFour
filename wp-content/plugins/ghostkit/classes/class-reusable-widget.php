<?php
/**
 * Widget for reusable blocks
 *
 * @package ghostkit
 */

/**
 * GhostKit_Reusable_Widget
 */
class GhostKit_Reusable_Widget extends WP_Widget {
    /**
     * Sets up the widgets name etc
     */
    public function __construct() {
        parent::__construct(
            'ghostkit_reusable_widget',
            esc_html__( 'Reusable Block', 'ghostkit' ),
            array(
                'classname' => 'ghostkit-reusable-widget',
                'description' => esc_html__( 'Display Gutenberg Reusable Blocks.', 'ghostkit' ),
            )
        );
    }

    /**
     * Outputs the content of the widget
     *
     * @param array $args args.
     * @param array $instance instance.
     */
    public function widget( $args, $instance ) {
        $title    = ! empty( $instance['title'] ) ? apply_filters( 'widget_title', $instance['title'] ) : '';
        $block_id = isset( $instance['block'] ) && ! empty( $instance['block'] ) ? $instance['block'] : '';
        $post     = $block_id ? get_post( $block_id ) : false;

        if ( $block_id && isset( $post->post_content ) && $post->post_content && function_exists( 'has_blocks' ) && function_exists( 'parse_blocks' ) ) {
            // phpcs:disable
            echo $args['before_widget'];

            if ( ! empty( $title ) ) {
                echo $args[ 'before_title' ] . $title . $args[ 'after_title' ];
            }

            // Get all blocks.
            $blocks = parse_blocks( $post->post_content );

            if ( is_array( $blocks ) && ! empty( $blocks ) ) {
                // prepare custom styles.
                $blocks_css = ghostkit()->parse_blocks_css( $blocks );
                if ( ! empty( $blocks_css ) ) {
                    ghostkit()->add_custom_css( 'ghostkit-blocks-widget-' . $args['widget_id'] . '-custom-css', ghostkit()->replace_vars( $blocks_css ) );
                }

                // render blocks.
                // we need to render blocks manually just because on custom post types
                // filter 'the_content' may not work if gutenberg support is disabled
                // https://github.com/nk-o/ghostkit/issues/72
                foreach( $blocks as $block ) {
                    echo do_shortcode( render_block( $block ) );
                }
            }

            echo $args['after_widget'];
            // phpcs:enable
        }
    }
    /**
     * Outputs the options form on admin
     *
     * @param array $instance The widget options.
     */
    public function form( $instance ) {
        $title = ! empty( $instance['title'] ) ? $instance['title'] : '';
        $selected_block = ! empty( $instance['block'] ) ? $instance['block'] : '';
        $blocks = get_posts(
            array(
                'post_type' => 'wp_block',
            )
        );
        ?>

        <p>
            <label for="<?php echo esc_attr( $this->get_field_id( 'title' ) ); ?>"><?php esc_attr_e( 'Title:', 'ghostkit' ); ?></label>
            <input class="widefat" id="<?php echo esc_attr( $this->get_field_id( 'title' ) ); ?>" name="<?php echo esc_attr( $this->get_field_name( 'title' ) ); ?>" type="text" value="<?php echo esc_attr( $title ); ?>">
        </p>

        <?php
        if ( ! empty( $blocks ) ) {
            ?>
            <p>
                <label for="<?php echo esc_attr( $this->get_field_id( 'block' ) ); ?>"><?php echo esc_attr__( 'Select Block:', 'ghostkit' ); ?></label>
                <select class="widefat" id="<?php echo esc_attr( $this->get_field_id( 'block' ) ); ?>" name="<?php echo esc_attr( $this->get_field_name( 'block' ) ); ?>">
                    <option value="" disabled <?php selected( ! $selected_block ); ?>><?php echo esc_html__( '--- Select block ---', 'ghostkit' ); ?></option>
                    <?php
                    foreach ( $blocks as $block ) {
                        ?>
                        <option value="<?php echo esc_attr( $block->ID ); ?>" <?php selected( $selected_block, $block->ID ); ?>>
                            <?php echo esc_html( $block->post_title ); ?>
                        </option>
                        <?php
                    }
                    ?>
                </select>
            </p>
            <?php
        } else {
            ?>
            <p><?php echo esc_attr__( 'No reusable blocks found.', 'ghostkit' ); ?></p>
            <?php
        }
    }

    /**
     * Processing widget options on save
     *
     * @param array $new_instance new options.
     * @param array $old_instance previous options.
     *
     * @return array
     */
    public function update( $new_instance, $old_instance ) {
        $instance = array(
            'title' => ! empty( $new_instance['title'] ) ? sanitize_text_field( $new_instance['title'] ) : '',
            'block' => ! empty( $new_instance['block'] ) ? sanitize_text_field( $new_instance['block'] ) : '',
        );

        return $instance;
    }
}

/**
 * Register Widget
 */
function ghostkit_register_reusable_widget() {
    register_widget( 'GhostKit_Reusable_Widget' );
}
add_action( 'widgets_init', 'ghostkit_register_reusable_widget' );
