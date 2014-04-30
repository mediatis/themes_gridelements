page = PAGE
<INCLUDE_TYPOSCRIPT: source="DIR:EXT:themes_gridelements/Configuration/Elements">
<INCLUDE_TYPOSCRIPT: source="DIR:EXT:themes_gridelements/Configuration/TypoScript/Library" extensions="setupts">


includeLibs.t3jquery = EXT:t3jquery/class.tx_t3jquery.php

page {
	typeNum = 0
    10 = FLUIDTEMPLATE
    10 {
        file {
            stdWrap.cObject = TEXT
            stdWrap.cObject {
                data = levelfield:-1, backend_layout_next_level, slide
                override.field = backend_layout
                split {
                    token     = pagets__
                    1.current = 1
                    1.wrap    = |
                }
                stdWrap.dataWrap    = {$themes.relativePath}Resources/Private/Templates/|.html
            }
            stdWrap.ifEmpty.cObject = TEXT
            stdWrap.ifEmpty.cObject {
                value   = EXT:themes_gridelements/Resources/Private/Templates/Error.html
            }
        }
        layoutRootPath  = {$themes.relativePath}Resources/Private/Layouts/
        partialRootPath = {$themes.relativePath}Resources/Private/Partials/
        variables {
            pageTitle = TEXT
            pageTitle.data = page:title
        }
    }
    75 = USER
    75 {
        userFunc = tx_t3jquery->addJqJS
    }
}