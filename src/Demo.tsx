import app, { Component, on } from 'apprun';
import { ButtonComponent, IProps } from './UI-Fabric/button/button';
import { CalloutComponent } from './UI-Fabric/callouts/callout';

export default class HomeComponent extends Component {
  state = {
    counter: '0',
    isDisabled: false
  };

  view = state => {
    return (
      <div>
        <h1> Welcome to AppRun UI Fabric</h1>
        <ButtonComponent label=" Add +1" type="primary" disabled={false} onclick={e => this.run('add', e)} />

        {state.counter}
        <p />
        <hr />
        <CalloutComponent
          type="DefaultCallout"
          buttonText="General One"
          body=" General Message body is optional. a link to learn more at
                the bottom. "
          title="this is title"
          //closeButton={false}
          label="im lable"
        />
        <hr />
        <CalloutComponent
          type="OoebCallout"
          buttonText="General One"
          body=" General Message body is optional. a link to learn more at
                the bottom. "
          title="this is title"
          label="im lable"
          closeButton={true}
        />
        <CalloutComponent
          type="ActionCallout"
          body="Action"
          buttonText="Action"
          label="Action"
          title="Action"
          onclick={() => console.log('CLICKED')}
          closeButton={true}
          command="Action"
        />
      </div>
    );
  };

  update = {
    '#': state => {
      return state;
    },

    add: (state, e) => {
      state.counter++;
      return state;
    },
    localClick: (state, e, p1) => {
      state.isDisabled = !state.isDisabled;
      return state;
    }
  };

  private testMethod(state, user) {
    return null;
  }
}

new HomeComponent().mount('ui-fabric-app');
