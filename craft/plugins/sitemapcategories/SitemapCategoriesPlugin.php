<?php

/**
 * SitemapCategories
 *
 * @package Craft
 */

namespace Craft;

/**
 * The main SitemapCategories plugin file.
 */
class SitemapCategoriesPlugin extends BasePlugin
{
    /**
     * Returns the plugin name.
     *
     * @return string
     */
    public function getName()
    {
        return Craft::t('Sitemap Categories');
    }

    /**
     * Returns the plugin description.
     *
     * @return string
     */
    public function getDescription()
    {
        return Craft::t('Adds categories to the sitemap.');
    }

    /**
     * Returns the plugin’s version number.
     *
     * @return string The plugin’s version number.
     */
    public function getVersion()
    {
        return '0.1.0';
    }

    /**
     * Returns the plugin developer’s name.
     *
     * @return string The plugin developer’s name.
     */
    public function getDeveloper()
    {
        return 'Trent Newton';
    }

    /**
     * Returns the plugin developer’s URL.
     *
     * @return string The plugin developer’s URL.
     */
    public function getDeveloperUrl()
    {
        return 'https://trentnewton.com';
    }

    /**
     * Returns a faux schema version, so Craft doesn't attempt to run database
     * updates when the plugin version changes.
     *
     * @return string
     */
    public function getSchemaVersion()
    {
        return '0.0.0';
    }

    /**
     * Returns a boolean indicating whether the plugin has settings.
     *
     * @return bool
     */
    public function hasSettings()
    {
        return false;
    }

    /**
     * Returns a boolean indicating whether the plugin has it's own control
     * panel section.
     *
     * @return bool
     */
    public function hasCpSection()
    {
        return false;
    }

    /**
     * Adds all categories to the sitemap.
     */
    public function renderSitemap()
    {
        $groups = craft()->categories->getAllGroups();

        foreach ($groups as $group) {
            craft()->sitemap->addCategoryGroup($group);
        }
    }
}