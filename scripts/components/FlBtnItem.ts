import FlBtnItemDesign from 'generated/my-components/FlBtnItem';

export default class FlBtnItem extends FlBtnItemDesign {
  pageName?: string | undefined;
  constructor(props?: any, pageName?: string) {
    // Initalizes super class for this scope
    super(props);
    this.pageName = pageName;
  }
}
