import app, { Component } from 'apprun';
import { DefaultCallout, ActionCallout, CloseCallout, OoebCallout, PeekCallout, GeneralCallout } from './callout-types';

export interface IProps {
  type?: 'DefaultCallout' | 'ActionCallout' | 'CloseCallout' | 'OoebCallout' | 'PeekCallout';
  buttonText?: String;
  title?: String;
  body?: String;
  closeButton?: Boolean;
  disabled?: boolean;
  label?: String;
  onclick?: Function;
}

type calloutType = 'DefaultCallout' | 'ActionCallout' | 'CloseCallout' | 'OoebCallout' | 'PeekCallout'

type actionCO<T> = T extends calloutType ? "string" : "object";


interface IState extends IProps {}

declare var fabric; //use import instead

export class CalloutComponent extends Component<IState> {
  constructor(protected props: IProps) {
    super();
  }

  state: IState = {
    type: 'DefaultCallout',
    disabled: false,
    label: 'Button',
    onclick: () => null
  };

  view = state => {   
    return (
      <>
        {this.props.type == "DefaultCallout" ?
          <DefaultCallout
            body="the body"
            buttonText="button text"
            closeButton={false}
            title="the title"
            type="ActionCallout"
          /> : null}
        
        {this.props.type == "CloseCallout" ?
          <CloseCallout
            body="the body"
            buttonText="button text"
            closeButton={false}
            title="the title"
            type="ActionCallout"
          /> : null}
        
        {this.props.type == "ActionCallout" ?
          <ActionCallout
            body="the body"
            buttonText="button text"
            closeButton={false}
            title="the title"
            type="ActionCallout"
          /> : null}
        
        {this.props.type == "OoebCallout" ?
          <OoebCallout
            body="the body"
            buttonText="button text"
            closeButton={false}
            title="the title"
            type="ActionCallout"
          /> : null}
        
        </>
    );
  };

  update = {
    click: async (state, e) => {
      state.onclick(e);
      return {
        ...state
      };
    }
  };

  mounted = props => {
    console.log('MOUNTED!');
    //console.log(props);
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

    console.log(CalloutExamples);
  }
}
