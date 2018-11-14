import app from 'apprun';

export interface IProps {
  type: 'DefaultCallout' | 'ActionCallout' | 'CloseCallout' | 'OoebCallout' | 'PeekCallout';
  buttonText: String;
  title: String;
  body: String;
  closeButton: Boolean;
  disabled?: boolean;
  label?: String;
  onclick?: Function;
}

export const DefaultCallout = (props: IProps) => {
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

export const CloseCallout = (props: IProps) => {
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

export const ActionCallout = (props: IProps) => {
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

export const OoebCallout = (props: IProps) => {
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

export const PeekCallout = (props: IProps) => {
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

export const GeneralCallout = (props: IProps) => {
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
