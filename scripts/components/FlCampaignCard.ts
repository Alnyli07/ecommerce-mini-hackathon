import FlCampaignCardDesign from 'generated/my-components/FlCampaignCard';

export default class FlCampaignCard extends FlCampaignCardDesign {
  pageName?: string | undefined;
  constructor(props?: any, pageName?: string) {
    // Initalizes super class for this scope
    super(props);
    this.pageName = pageName;
  }
}
