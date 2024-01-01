<?php

// scoper-autoload.php @generated by PhpScoper

$loader = (static function () {
    // Backup the autoloaded Composer files
    $existingComposerAutoloadFiles = $GLOBALS['__composer_autoload_files'] ?? [];

    $loader = require_once __DIR__.'/autoload.php';
    // Ensure InstalledVersions is available
    $installedVersionsPath = __DIR__.'/composer/InstalledVersions.php';
    if (file_exists($installedVersionsPath)) require_once $installedVersionsPath;

    // Restore the backup and ensure the excluded files are properly marked as loaded
    $GLOBALS['__composer_autoload_files'] = \array_merge(
        $existingComposerAutoloadFiles,
        \array_fill_keys(['c8472dc6a0f20e34b02f7c4975203541', 'a91ce56b52ca00ce2db0b98e23da7cce', 'aff7ae8d274a4f87cc18cb12e954fb80', 'aef0ba5e48128d6bfd2443d1ffd6d97e', '9d51596ff8b3235677d992760edd9fdc', 'b8f3e9d6befa81422d6297437ac4bc1f', '539e6a7b3dbc75f0cbca9212e4a47d20', '0fb57bef01bf634fb01f154b00afe962'], true)
    );

    return $loader;
})();

// Class aliases. For more information see:
// https://github.com/humbug/php-scoper/blob/master/docs/further-reading.md#class-aliases
if (!function_exists('humbug_phpscoper_expose_class')) {
    function humbug_phpscoper_expose_class($exposed, $prefixed) {
        if (!class_exists($exposed, false) && !interface_exists($exposed, false) && !trait_exists($exposed, false)) {
            spl_autoload_call($prefixed);
        }
    }
}
humbug_phpscoper_expose_class('JsonException', 'MatthiasWeb\RealMediaLibrary\Vendor\JsonException');

// Function aliases. For more information see:
// https://github.com/humbug/php-scoper/blob/master/docs/further-reading.md#function-aliases
// if (!function_exists('_wp_rml_meta_fix_absint')) { function _wp_rml_meta_fix_absint() { return \MatthiasWeb\RealMediaLibrary\Vendor\_wp_rml_meta_fix_absint(...func_get_args()); } }
// if (!function_exists('_wp_rml_root')) { function _wp_rml_root() { return \MatthiasWeb\RealMediaLibrary\Vendor\_wp_rml_root(...func_get_args()); } }
// if (!function_exists('_wp_rml_sanitize')) { function _wp_rml_sanitize() { return \MatthiasWeb\RealMediaLibrary\Vendor\_wp_rml_sanitize(...func_get_args()); } }
// if (!function_exists('_wp_rml_sanitize_filename')) { function _wp_rml_sanitize_filename() { return \MatthiasWeb\RealMediaLibrary\Vendor\_wp_rml_sanitize_filename(...func_get_args()); } }
// if (!function_exists('_wp_rml_synchronize_attachment')) { function _wp_rml_synchronize_attachment() { return \MatthiasWeb\RealMediaLibrary\Vendor\_wp_rml_synchronize_attachment(...func_get_args()); } }
// if (!function_exists('add_media_folder_meta')) { function add_media_folder_meta() { return \MatthiasWeb\RealMediaLibrary\Vendor\add_media_folder_meta(...func_get_args()); } }
// if (!function_exists('add_rml_meta_box')) { function add_rml_meta_box() { return \MatthiasWeb\RealMediaLibrary\Vendor\add_rml_meta_box(...func_get_args()); } }
// if (!function_exists('add_rml_user_settings_box')) { function add_rml_user_settings_box() { return \MatthiasWeb\RealMediaLibrary\Vendor\add_rml_user_settings_box(...func_get_args()); } }
// if (!function_exists('delete_media_folder_meta')) { function delete_media_folder_meta() { return \MatthiasWeb\RealMediaLibrary\Vendor\delete_media_folder_meta(...func_get_args()); } }
// if (!function_exists('delete_media_folder_meta_by_key')) { function delete_media_folder_meta_by_key() { return \MatthiasWeb\RealMediaLibrary\Vendor\delete_media_folder_meta_by_key(...func_get_args()); } }
// if (!function_exists('get_media_folder_meta')) { function get_media_folder_meta() { return \MatthiasWeb\RealMediaLibrary\Vendor\get_media_folder_meta(...func_get_args()); } }
// if (!function_exists('is_rml_folder')) { function is_rml_folder() { return \MatthiasWeb\RealMediaLibrary\Vendor\is_rml_folder(...func_get_args()); } }
// if (!function_exists('truncate_media_folder_meta')) { function truncate_media_folder_meta() { return \MatthiasWeb\RealMediaLibrary\Vendor\truncate_media_folder_meta(...func_get_args()); } }
// if (!function_exists('update_media_folder_meta')) { function update_media_folder_meta() { return \MatthiasWeb\RealMediaLibrary\Vendor\update_media_folder_meta(...func_get_args()); } }
// if (!function_exists('wp_attachment_ensure_source_file')) { function wp_attachment_ensure_source_file() { return \MatthiasWeb\RealMediaLibrary\Vendor\wp_attachment_ensure_source_file(...func_get_args()); } }
// if (!function_exists('wp_attachment_folder')) { function wp_attachment_folder() { return \MatthiasWeb\RealMediaLibrary\Vendor\wp_attachment_folder(...func_get_args()); } }
// if (!function_exists('wp_attachment_get_shortcuts')) { function wp_attachment_get_shortcuts() { return \MatthiasWeb\RealMediaLibrary\Vendor\wp_attachment_get_shortcuts(...func_get_args()); } }
// if (!function_exists('wp_attachment_has_shortcuts')) { function wp_attachment_has_shortcuts() { return \MatthiasWeb\RealMediaLibrary\Vendor\wp_attachment_has_shortcuts(...func_get_args()); } }
// if (!function_exists('wp_attachment_is_shortcut')) { function wp_attachment_is_shortcut() { return \MatthiasWeb\RealMediaLibrary\Vendor\wp_attachment_is_shortcut(...func_get_args()); } }
// if (!function_exists('wp_attachment_order_update')) { function wp_attachment_order_update() { return \MatthiasWeb\RealMediaLibrary\Vendor\wp_attachment_order_update(...func_get_args()); } }
// if (!function_exists('wp_rml_active')) { function wp_rml_active() { return \MatthiasWeb\RealMediaLibrary\Vendor\wp_rml_active(...func_get_args()); } }
// if (!function_exists('wp_rml_all_children_sql_supported')) { function wp_rml_all_children_sql_supported() { return \MatthiasWeb\RealMediaLibrary\Vendor\wp_rml_all_children_sql_supported(...func_get_args()); } }
// if (!function_exists('wp_rml_create')) { function wp_rml_create() { return \MatthiasWeb\RealMediaLibrary\Vendor\wp_rml_create(...func_get_args()); } }
// if (!function_exists('wp_rml_create_all_children_sql')) { function wp_rml_create_all_children_sql() { return \MatthiasWeb\RealMediaLibrary\Vendor\wp_rml_create_all_children_sql(...func_get_args()); } }
// if (!function_exists('wp_rml_create_all_parents_sql')) { function wp_rml_create_all_parents_sql() { return \MatthiasWeb\RealMediaLibrary\Vendor\wp_rml_create_all_parents_sql(...func_get_args()); } }
// if (!function_exists('wp_rml_create_or_return_existing_id')) { function wp_rml_create_or_return_existing_id() { return \MatthiasWeb\RealMediaLibrary\Vendor\wp_rml_create_or_return_existing_id(...func_get_args()); } }
// if (!function_exists('wp_rml_create_p')) { function wp_rml_create_p() { return \MatthiasWeb\RealMediaLibrary\Vendor\wp_rml_create_p(...func_get_args()); } }
// if (!function_exists('wp_rml_create_shortcuts')) { function wp_rml_create_shortcuts() { return \MatthiasWeb\RealMediaLibrary\Vendor\wp_rml_create_shortcuts(...func_get_args()); } }
// if (!function_exists('wp_rml_created_shortcuts_last_ids')) { function wp_rml_created_shortcuts_last_ids() { return \MatthiasWeb\RealMediaLibrary\Vendor\wp_rml_created_shortcuts_last_ids(...func_get_args()); } }
// if (!function_exists('wp_rml_debug')) { function wp_rml_debug() { return \MatthiasWeb\RealMediaLibrary\Vendor\wp_rml_debug(...func_get_args()); } }
// if (!function_exists('wp_rml_delete')) { function wp_rml_delete() { return \MatthiasWeb\RealMediaLibrary\Vendor\wp_rml_delete(...func_get_args()); } }
// if (!function_exists('wp_rml_dropdown')) { function wp_rml_dropdown() { return \MatthiasWeb\RealMediaLibrary\Vendor\wp_rml_dropdown(...func_get_args()); } }
// if (!function_exists('wp_rml_dropdown_collection')) { function wp_rml_dropdown_collection() { return \MatthiasWeb\RealMediaLibrary\Vendor\wp_rml_dropdown_collection(...func_get_args()); } }
// if (!function_exists('wp_rml_dropdown_gallery')) { function wp_rml_dropdown_gallery() { return \MatthiasWeb\RealMediaLibrary\Vendor\wp_rml_dropdown_gallery(...func_get_args()); } }
// if (!function_exists('wp_rml_dropdown_gallery_or_collection')) { function wp_rml_dropdown_gallery_or_collection() { return \MatthiasWeb\RealMediaLibrary\Vendor\wp_rml_dropdown_gallery_or_collection(...func_get_args()); } }
// if (!function_exists('wp_rml_get_attachments')) { function wp_rml_get_attachments() { return \MatthiasWeb\RealMediaLibrary\Vendor\wp_rml_get_attachments(...func_get_args()); } }
// if (!function_exists('wp_rml_get_by_absolute_path')) { function wp_rml_get_by_absolute_path() { return \MatthiasWeb\RealMediaLibrary\Vendor\wp_rml_get_by_absolute_path(...func_get_args()); } }
// if (!function_exists('wp_rml_get_by_id')) { function wp_rml_get_by_id() { return \MatthiasWeb\RealMediaLibrary\Vendor\wp_rml_get_by_id(...func_get_args()); } }
// if (!function_exists('wp_rml_get_object_by_id')) { function wp_rml_get_object_by_id() { return \MatthiasWeb\RealMediaLibrary\Vendor\wp_rml_get_object_by_id(...func_get_args()); } }
// if (!function_exists('wp_rml_get_parent_id')) { function wp_rml_get_parent_id() { return \MatthiasWeb\RealMediaLibrary\Vendor\wp_rml_get_parent_id(...func_get_args()); } }
// if (!function_exists('wp_rml_is_type')) { function wp_rml_is_type() { return \MatthiasWeb\RealMediaLibrary\Vendor\wp_rml_is_type(...func_get_args()); } }
// if (!function_exists('wp_rml_last_queried_folder')) { function wp_rml_last_queried_folder() { return \MatthiasWeb\RealMediaLibrary\Vendor\wp_rml_last_queried_folder(...func_get_args()); } }
// if (!function_exists('wp_rml_move')) { function wp_rml_move() { return \MatthiasWeb\RealMediaLibrary\Vendor\wp_rml_move(...func_get_args()); } }
// if (!function_exists('wp_rml_objects')) { function wp_rml_objects() { return \MatthiasWeb\RealMediaLibrary\Vendor\wp_rml_objects(...func_get_args()); } }
// if (!function_exists('wp_rml_register_creatable')) { function wp_rml_register_creatable() { return \MatthiasWeb\RealMediaLibrary\Vendor\wp_rml_register_creatable(...func_get_args()); } }
// if (!function_exists('wp_rml_rename')) { function wp_rml_rename() { return \MatthiasWeb\RealMediaLibrary\Vendor\wp_rml_rename(...func_get_args()); } }
// if (!function_exists('wp_rml_root_childs')) { function wp_rml_root_childs() { return \MatthiasWeb\RealMediaLibrary\Vendor\wp_rml_root_childs(...func_get_args()); } }
// if (!function_exists('wp_rml_selector')) { function wp_rml_selector() { return \MatthiasWeb\RealMediaLibrary\Vendor\wp_rml_selector(...func_get_args()); } }
// if (!function_exists('wp_rml_structure')) { function wp_rml_structure() { return \MatthiasWeb\RealMediaLibrary\Vendor\wp_rml_structure(...func_get_args()); } }
// if (!function_exists('wp_rml_structure_reset')) { function wp_rml_structure_reset() { return \MatthiasWeb\RealMediaLibrary\Vendor\wp_rml_structure_reset(...func_get_args()); } }
// if (!function_exists('wp_rml_update_count')) { function wp_rml_update_count() { return \MatthiasWeb\RealMediaLibrary\Vendor\wp_rml_update_count(...func_get_args()); } }

return $loader;
