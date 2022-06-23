import GvProductItemDesign from 'generated/my-components/GvProductItem';

export default class GvProductItem extends GvProductItemDesign {
  pageName?: string | undefined;
  constructor(props?: any, pageName?: string) {
    // Initalizes super class for this scope
    super(props);
    this.pageName = pageName;
  }
}
