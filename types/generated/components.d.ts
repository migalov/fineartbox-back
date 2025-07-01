import type { Schema, Struct } from '@strapi/strapi';

export interface FilterFilterBlock extends Struct.ComponentSchema {
  collectionName: 'components_filter_filter_blocks';
  info: {
    displayName: 'FilterBlock';
    icon: 'plus';
  };
  attributes: {
    category: Schema.Attribute.String;
    options: Schema.Attribute.Component<'filter.option', true>;
    slug: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface FilterOption extends Struct.ComponentSchema {
  collectionName: 'components_filter_options';
  info: {
    displayName: 'Option';
  };
  attributes: {
    description: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    label: Schema.Attribute.String;
    slug: Schema.Attribute.String;
  };
}

export interface GridsCardsList extends Struct.ComponentSchema {
  collectionName: 'components_grids_cards_lists';
  info: {
    displayName: 'CardsList';
  };
  attributes: {
    cardsList: Schema.Attribute.Component<'ui.card', true>;
    title: Schema.Attribute.String;
  };
}

export interface GridsReadyProjects extends Struct.ComponentSchema {
  collectionName: 'components_grids_ready_projects';
  info: {
    displayName: 'ReadyProjects';
    icon: 'apps';
  };
  attributes: {
    anchor: Schema.Attribute.String;
    projectsList: Schema.Attribute.Component<'ui.ready-project', true>;
    title: Schema.Attribute.String;
  };
}

export interface GridsSectionMenus extends Struct.ComponentSchema {
  collectionName: 'components_grids_section_menus';
  info: {
    displayName: 'Section Menus';
  };
  attributes: {
    gridArea: Schema.Attribute.String;
    href: Schema.Attribute.String;
    label: Schema.Attribute.String;
    listsMenus: Schema.Attribute.Component<'ui.list-menu', true>;
  };
}

export interface GridsSeoBlock extends Struct.ComponentSchema {
  collectionName: 'components_grids_seo_blocks';
  info: {
    displayName: 'SEO Block';
    icon: 'search';
  };
  attributes: {
    columnOne: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    columnTwo: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
  };
}

export interface SliderSlide extends Struct.ComponentSchema {
  collectionName: 'components_slider_slides';
  info: {
    displayName: 'Slide';
  };
  attributes: {
    backgoundDesktop: Schema.Attribute.String;
    backgroundMobile: Schema.Attribute.String;
    description: Schema.Attribute.String;
    htmlContent: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    imageDesktop: Schema.Attribute.Media<'images'>;
    imageMobile: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String;
  };
}

export interface UiAnnounce extends Struct.ComponentSchema {
  collectionName: 'components_ui_announces';
  info: {
    displayName: 'Announce';
    icon: 'check';
  };
  attributes: {
    text: Schema.Attribute.String;
  };
}

export interface UiCard extends Struct.ComponentSchema {
  collectionName: 'components_ui_cards';
  info: {
    displayName: 'Card';
    icon: 'book';
  };
  attributes: {
    description: Schema.Attribute.String;
    href: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    src: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface UiFaqItem extends Struct.ComponentSchema {
  collectionName: 'components_ui_faq_items';
  info: {
    displayName: 'FAQ Item';
    icon: 'question';
  };
  attributes: {
    htmlContent: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    title: Schema.Attribute.String;
  };
}

export interface UiFaqList extends Struct.ComponentSchema {
  collectionName: 'components_ui_faq_lists';
  info: {
    displayName: 'FAQ List';
    icon: 'question';
  };
  attributes: {
    faqList: Schema.Attribute.Component<'ui.faq-item', true>;
    title: Schema.Attribute.String;
  };
}

export interface UiHtmlBlock extends Struct.ComponentSchema {
  collectionName: 'components_ui_html_blocks';
  info: {
    displayName: 'HTMLBlock';
    icon: 'code';
  };
  attributes: {
    anchor: Schema.Attribute.String;
    htmlContent: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface UiItemMenu extends Struct.ComponentSchema {
  collectionName: 'components_ui_item_menus';
  info: {
    displayName: 'ItemMenu';
    icon: 'link';
  };
  attributes: {
    active: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    href: Schema.Attribute.String;
    label: Schema.Attribute.String;
  };
}

export interface UiListMenu extends Struct.ComponentSchema {
  collectionName: 'components_ui_list_menus';
  info: {
    displayName: 'ListMenu';
    icon: 'bulletList';
  };
  attributes: {
    active: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    href: Schema.Attribute.String;
    itemsMenu: Schema.Attribute.Component<'ui.item-menu', true>;
    label: Schema.Attribute.String;
    line: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
  };
}

export interface UiPortfolioItem extends Struct.ComponentSchema {
  collectionName: 'components_ui_portfolio_items';
  info: {
    displayName: 'PortfolioItem';
  };
  attributes: {
    backgroundColor: Schema.Attribute.String;
    backgroundImage: Schema.Attribute.String;
    description: Schema.Attribute.String;
    desktopAspectRatio: Schema.Attribute.String;
    desktopColumns: Schema.Attribute.Integer;
    desktopRows: Schema.Attribute.Integer;
    mobileAspectRatio: Schema.Attribute.String;
    mobileColumns: Schema.Attribute.Integer;
    mobileRows: Schema.Attribute.Integer;
    title: Schema.Attribute.String;
  };
}

export interface UiReadyProject extends Struct.ComponentSchema {
  collectionName: 'components_ui_ready_projects';
  info: {
    displayName: 'ReadyProject';
    icon: 'picture';
  };
  attributes: {
    href: Schema.Attribute.String;
    src: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'filter.filter-block': FilterFilterBlock;
      'filter.option': FilterOption;
      'grids.cards-list': GridsCardsList;
      'grids.ready-projects': GridsReadyProjects;
      'grids.section-menus': GridsSectionMenus;
      'grids.seo-block': GridsSeoBlock;
      'slider.slide': SliderSlide;
      'ui.announce': UiAnnounce;
      'ui.card': UiCard;
      'ui.faq-item': UiFaqItem;
      'ui.faq-list': UiFaqList;
      'ui.html-block': UiHtmlBlock;
      'ui.item-menu': UiItemMenu;
      'ui.list-menu': UiListMenu;
      'ui.portfolio-item': UiPortfolioItem;
      'ui.ready-project': UiReadyProject;
    }
  }
}
