import type { Schema, Struct } from '@strapi/strapi';

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
    projectsList: Schema.Attribute.Component<'ui.ready-project', true>;
    title: Schema.Attribute.String;
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
    title: Schema.Attribute.String;
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
    src: Schema.Attribute.String;
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

export interface UiItemMenu extends Struct.ComponentSchema {
  collectionName: 'components_ui_item_menus';
  info: {
    displayName: 'ItemMenu';
    icon: 'link';
  };
  attributes: {
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
    href: Schema.Attribute.String;
    itemsMenu: Schema.Attribute.Component<'ui.item-menu', true>;
    label: Schema.Attribute.String;
    line: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
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
      'grids.cards-list': GridsCardsList;
      'grids.ready-projects': GridsReadyProjects;
      'slider.slide': SliderSlide;
      'ui.card': UiCard;
      'ui.html-block': UiHtmlBlock;
      'ui.item-menu': UiItemMenu;
      'ui.list-menu': UiListMenu;
      'ui.ready-project': UiReadyProject;
    }
  }
}
