import GvCategoryItemDesign from 'generated/my-components/GvCategoryItem';

export default class GvCategoryItem extends GvCategoryItemDesign {
  pageName?: string | undefined;
  constructor(props?: any, pageName?: string) {
    // Initalizes super class for this scope
    super(props);
    this.pageName = pageName;
  }
}
