import GvCampaignCardDesign from 'generated/my-components/GvCampaignCard';

export default class GvCampaignCard extends GvCampaignCardDesign {
  pageName?: string | undefined;
  constructor(props?: any, pageName?: string) {
    // Initalizes super class for this scope
    super(props);
    this.pageName = pageName;
  }
}
