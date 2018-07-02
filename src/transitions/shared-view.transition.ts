//
// assumptions:
// - shared html elements need to have "shared-element" class in both the entering
// and leaving views
//
import { PageTransition, Animation } from 'ionic-angular'
export class SharedElements extends PageTransition {

  init() {

      this.enteringPage = new Animation(this.plt, this.enteringView.pageRef());
      this.add(this.enteringPage.beforeAddClass('show-page'));
      this.add(this.enteringPage.beforeRemoveClass('hide-page'));
      const leavingPage = new Animation(this.plt, this.leavingView.pageRef());
      this.add(leavingPage.beforeAddClass('hide-page'));
      this.add(leavingPage.beforeRemoveClass('show-page'));

      this.easing('ease-in').duration(200);

      let lEle = this.leavingView.pageRef().nativeElement;
      let eEle = this.enteringView.pageRef().nativeElement;

      let lEntity = lEle.querySelector('.shared-element');
      let eEntity = eEle.querySelectorAll('.shared-element');
      if (lEntity) {
          this.add(this.buildAnimation(lEntity, eEntity));
      }
  }

  private buildAnimation(leaving, entering): Animation {
      let fromPosition = leaving.getBoundingClientRect();
      let toPosition = entering.getBoundingClientRect();

      let flipS = toPosition.width / fromPosition.width;
      let flipY = fromPosition.top - toPosition.top;
      let flipX = fromPosition.left - toPosition.left;

      let sharedAnimation = new Animation(this.plt, entering);
      sharedAnimation
          .fromTo('translateY', `${flipY}px`, '0px', true)
          .fromTo('translateX', `${flipX}px`, '0px', true)
          .fromTo('scale', '1', flipS, true);
      return sharedAnimation;
  }
}
