import app, { Component } from 'apprun';
import {
  DefaultCallout,
  ActionCallout,
  CloseCallout,
  OoebCallout,
  PeekCallout,
  GeneralCallout,
  CalloutProps,
  initializeValue,
  IDefaultCallout,
  IActionCallout,
  ICloseCallout,
  IOoebCalloutt,
  IPeekCallout
} from './callout-types';

const CallOuts = {
  DefaultCallout,
  ActionCallout,
  CloseCallout,
  OoebCallout,
  PeekCallout
};

declare var fabric; //use import instead
export class CalloutComponent<
  T extends IDefaultCallout | IActionCallout | ICloseCallout | IOoebCalloutt | IPeekCallout
> extends Component<CalloutProps> {
  constructor(protected props: T) {
    super();
  }

  state: CalloutProps = {
    type: 'ActionCallout',
    disabled: false,
    label: 'Button',
    onclick: () => null,
    body: '',
    buttonText: '',
    closeButton: false,
    title: ''
  };

  view = (state: CalloutProps) => {
    let CalOutComponent = CallOuts[state.type];
    return (
      <>
        {app.createElement(CalOutComponent, {
          body: state.body,
          buttonText: state.buttonText,
          title: state.title,
          type: state.type,
          closeButton: state,
          onclick: state.onclick
        })}
      </>
    );
  };

  update = {
    click: async (state, e) => {
      state.onclick(e);
      return { ...state };
    }
  };

  mounted = props => {
    initializeValue(CallOuts[props.type]);
    this.state = { ...this.state, ...props };
  };

  rendered = state => {
    this.initialize();
  };

  private initialize() {
    var CalloutExamples = document.querySelectorAll('.ms-CalloutExample');
    for (var i = 0; i < CalloutExamples.length; i++) {
      var Example = CalloutExamples[i];
      var ExampleButtonElement = Example.querySelector('.ms-CalloutExample-button .ms-Button');
      var CalloutElement = Example.querySelector('.ms-Callout');
      new fabric['Callout'](CalloutElement, ExampleButtonElement, 'right');
    }
  }
}
