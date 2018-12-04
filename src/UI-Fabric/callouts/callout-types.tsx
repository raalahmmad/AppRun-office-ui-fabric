import app from 'apprun';

// export interface IProps {
//   type: 'DefaultCallout' | 'ActionCallout' | 'CloseCallout' | 'OoebCallout' | 'PeekCallout';
//   buttonText: String;
//   title: String;
//   body: String;
//   closeButton: Boolean;
//   disabled?: boolean;
//   label?: String;
//   onclick?: Function;
// }

export interface IDefaultCallout {
  type: 'DefaultCallout';
  title: string;
  body: string;
  buttonText: string;
  //closeButton: Boolean;
  disabled?: boolean;
  label?: String;
  onclick?: Function;
}

export interface ICloseCallout {
  type: 'CloseCallout';
  title: string;
  body: string;
  buttonText: string;
  closeButton: Boolean;
  disabled?: boolean;
  label?: String;
  onclick?: Function;
}

export interface IActionCallout {
  type: 'ActionCallout';
  title: string;
  body: string;
  buttonText: string;
  command?: string;
  closeButton: Boolean;
  disabled?: boolean;
  label?: String;
  onclick?: Function;
}

export interface IOoebCalloutt {
  type: 'OoebCallout';
  title: string;
  body: string;
  buttonText: string;
  command?: string;
  closeButton: Boolean;
  disabled?: boolean;
  label?: String;
  onclick?: Function;
}

export interface IPeekCallout {
  type: 'PeekCallout';
  title: string;
  body: string;
  buttonText: string;
  command?: string;
  closeButton: Boolean;
  disabled?: boolean;
  label?: String;
  onclick?: Function;
}

export type CalloutProps = IDefaultCallout | ICloseCallout | IActionCallout | IOoebCalloutt | IPeekCallout;

export const DefaultCallout = (props: IDefaultCallout) => {
  return (
    <div className="ms-CalloutExample">
      <div className="ms-Callout is-hidden">
        <div className="ms-Callout-main">
          <div className="ms-Callout-header">
            <p className="ms-Callout-title">{props.title}</p>
          </div>
          <div className="ms-Callout-inner">
            <div className="ms-Callout-content">
              <p className="ms-Callout-subText">{props.body}</p>
            </div>
            <div className="ms-Callout-actions">
              <a className="ms-Link">Learn more</a>
            </div>
          </div>
        </div>
      </div>
      <div className="ms-CalloutExample-button">
        <button className="ms-Button">
          <span className="ms-Button-label">{props.buttonText}</span>
        </button>
      </div>
    </div>
  );
};

export const CloseCallout = (props: ICloseCallout) => {
  return (
    <div className="ms-CalloutExample">
      <div className="ms-Callout ms-Callout--arrowLeft  ms-Callout--close is-hidden">
        <div className="ms-Callout-main">
          <button className="ms-Callout-close">
            <i className="ms-Icon ms-Icon--Clear" />
          </button>
          <div className="ms-Callout-header">
            <p className="ms-Callout-title">{props.title}</p>
          </div>
          <div className="ms-Callout-inner">
            <div className="ms-Callout-content">
              <p className="ms-Callout-subText">{props.body}</p>
            </div>
            <div className="ms-Callout-actions">
              <a className="ms-Link" title="Learn More">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="ms-CalloutExample-button">
        <button className="ms-Button">
          <span className="ms-Button-label">{props.buttonText}</span>
        </button>
      </div>
    </div>
  );
};

export const ActionCallout = (props: IActionCallout) => {
  return (
    <div className="ms-CalloutExample">
      <div className="ms-Callout ms-Callout--actionText is-hidden">
        <div className="ms-Callout-main">
          <div className="ms-Callout-header">
            <p className="ms-Callout-title">{props.title}</p>
          </div>
          <div className="ms-Callout-inner">
            <div className="ms-Callout-content">
              <p className="ms-Callout-subText">{props.body}</p>
            </div>
            <div className="ms-Callout-actions">
              <div className="ms-CommandButton ms-CommandButton--inline">
                <button className="ms-CommandButton-button">
                  <span className="ms-CommandButton-icon ms-fontColor-green">
                    <i className="ms-Icon ms-Icon--CheckMark" />
                  </span>
                  <span className="ms-CommandButton-label">{props.command}</span>
                </button>
              </div>
              <div className="ms-CommandButton ms-CommandButton--inline">
                <button className="ms-CommandButton-button" onclick={e => app.run(props.onclick())}>
                  <span className="ms-CommandButton-icon ms-fontColor-red">
                    <i className="ms-Icon ms-Icon--Clear" />
                  </span>
                  <span className="ms-CommandButton-label">Command</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ms-CalloutExample-button">
        <button className="ms-Button">
          <span className="ms-Button-label">{props.buttonText}</span>
        </button>
      </div>
    </div>
  );
};

export const OoebCallout = (props: IOoebCalloutt) => {
  return (
    <div className="ms-CalloutExample">
      <div className="ms-Callout ms-Callout--arrowLeft  ms-Callout--OOBE is-hidden">
        <div className="ms-Callout-main">
          <div className="ms-Callout-header">
            <p className="ms-Callout-title">{props.title}</p>
          </div>
          <div className="ms-Callout-inner">
            <div className="ms-Callout-content">
              <p className="ms-Callout-subText">{props.body}</p>
            </div>
            <div className="ms-Callout-actions">
              <button className="ms-Button ms-Button--primary">
                <span className="ms-Button-label">More</span>
              </button>
              <button className="ms-Button">
                <span className="ms-Button-label">Got it</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="ms-CalloutExample-button">
        <button className="ms-Button">
          <span className="ms-Button-label">{props.buttonText}</span>
        </button>
      </div>
    </div>
  );
};

export const PeekCallout = (props: IPeekCallout) => {
  return (
    <div className="ms-CalloutExample">
      <div className="ms-Callout ms-Callout--arrowLeft  ms-Callout--peek is-hidden">
        <div className="ms-Callout-main">
          <div className="ms-Callout-header">
            <p className="ms-Callout-title">
              Uploaded 2 items to <span className="ms-Link">Alton's OneDrive</span>{' '}
            </p>
          </div>
          <div className="ms-Callout-inner">
            <div className="ms-Callout-content">
              <p className="ms-Callout-subText" />
            </div>
            <div className="ms-Callout-actions">
              <button className="ms-Button">
                <span className="ms-Button-label">Got it</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="ms-CalloutExample-button">
        <button className="ms-Button">
          <span className="ms-Button-label">{props.buttonText}</span>
        </button>
      </div>
    </div>
  );
};

export const GeneralCallout = (props: CalloutProps | any) => {
  return (
    <div className="ms-CalloutExample">
      <div className={`ms-Callout ms-Callout--${props.type} is-hidden"`}>
        <div className="ms-Callout-main">
          {props.closeButton && (
            <button className="ms-Callout-close">
              <i className="ms-Icon ms-Icon--Clear" />
            </button>
          )}
          <div className="ms-Callout-header">
            <p className="ms-Callout-title">{props.title}</p>
          </div>
          <div className="ms-Callout-inner">
            <div className="ms-Callout-content">
              <p className="ms-Callout-subText">{props.body}</p>
            </div>
            {props.type == 'ActionCallout' || props.type == 'OoebCallout' ? (
              <div className="ms-Callout-actions">
                <div className="ms-CommandButton ms-CommandButton--inline">
                  <button className="ms-CommandButton-button">
                    <span className="ms-CommandButton-icon ms-fontColor-green">
                      <i className="ms-Icon ms-Icon--CheckMark" />
                    </span>
                    <span className="ms-CommandButton-label">Command</span>
                  </button>
                </div>
                <div className="ms-CommandButton ms-CommandButton--inline">
                  <button className="ms-CommandButton-button">
                    <span className="ms-CommandButton-icon ms-fontColor-red">
                      <i className="ms-Icon ms-Icon--Clear" />
                    </span>
                    <span className="ms-CommandButton-label">Command</span>
                  </button>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
      <div className="ms-CalloutExample-button">
        <button className="ms-Button">
          <span className="ms-Button-label">{props.buttonText}</span>
        </button>
      </div>
    </div>
  );
};

export function initializeValue(callout: CalloutProps) {
  switch (callout.type) {
    case 'DefaultCallout':
      callout.body = 'Body DEFAULT';
      break;
    case 'ActionCallout':
      callout.closeButton = false;
    case 'CloseCallout':
      callout.closeButton = false;
    case 'OoebCallout':
      callout.closeButton = false;
    case 'PeekCallout':
      callout.closeButton = false;
    default:
      //const shouldNotReach: never = callout;
      break;
  }
}

/*  -- Use this way
function intializeValue(field: Field) {
  switch (field.control) {
    case "Textbox":
      field.value = "";
      break;
    case "DatePicker":
      field.value = new Date();
      break;
    case "NumberSlider":
      field.value = 0;
      break;
    default:
      const shouldNotReach: never = field;
  }
}
*/
