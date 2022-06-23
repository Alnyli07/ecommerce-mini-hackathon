import Page1Design from 'generated/pages/page1';
import PageTitleLayout from 'components/PageTitleLayout';
import System from '@smartface/native/device/system';
import Label from '@smartface/native/ui/label';
import { Route, Router } from '@smartface/router';
import { styleableComponentMixin } from '@smartface/styling-context';
import { themeService } from 'theme';
import { i18n } from '@smartface/i18n';
import Screen from '@smartface/native/device/screen';
import { ScrollDirection } from '@smartface/native/ui/layoutmanager/layoutmanager';
import HeaderBarItem from '@smartface/native/ui/headerbaritem';

class StyleableHeaderBarItem extends styleableComponentMixin(HeaderBarItem) { }

export default class Page1 extends Page1Design {
    private disposeables: (() => void)[] = [];
    bellItem: StyleableHeaderBarItem;
    basketItem: StyleableHeaderBarItem;
    constructor(private router?: Router, private route?: Route) {
        super({});
        this.bellItem = new StyleableHeaderBarItem({ image: 'images://bell.png' });
        this.basketItem = new StyleableHeaderBarItem({ image: 'images://basket.png' });

        console.log('[page1] constructor');
    }

    setTexts() {
    }

    /**
     * @event onShow
     * This event is called when a page appears on the screen (everytime).
     */
    onShow() {
        super.onShow();
        console.log('[page1] onShow');
    }
    /**
     * @event onLoad
     * This event is called once when page is created.
     */
    onLoad() {
        super.onLoad();
        this.setTexts();
        console.log('[page1] onLoad');
        this.headerBar.leftItemEnabled = false;
        this.gridView1.layoutManager.onItemLength = () => 308;
        this.gridView1.layoutManager.spanCount = 1;
        this.gridView1.layoutManager.scrollDirection = ScrollDirection.HORIZONTAL;
        this.gridBtnCategory.layoutManager.onItemLength = () => 75;
        this.gridProductCategory.layoutManager.onItemLength = () => 175;
        this.headerBar.setItems([this.bellItem, this.basketItem]);
    }

    onHide(): void {
        this.dispose();
    }

    dispose(): void {
        this.disposeables.forEach((item) => item());
    }
}
