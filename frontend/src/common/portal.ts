/// <reference path='../../typings/tsd.d.ts' />

import React = require('react');
import Modal = require('./Modal.react');
import ConfirmDialog = require('./ConfirmDialog.react');

var portalNode;

export function confirmDialog(title: React.ReactNode, body: React.ReactNode, okHandler, cancelHandler, options) {
  console.log('portal-confirmDialog');
  options = options || {};
  if (okHandler) {
    options.okButtonClickHandler = okHandler;
  }
  if (cancelHandler) {
    options.cancelButtonClickHandler = cancelHandler;
  }
  closePortal();
  openPortal(
    React.createElement(Modal, <Modal.Props> {title: title},
      React.createElement(ConfirmDialog, Object.assign({}, {message: body}, options))
    )
  );
}

export function openPortal(children) {
  portalNode = document.createElement('div');
  document.body.appendChild(portalNode);
  React.render(children, portalNode);
}

export function closePortal() {
  console.log('portal-closePortal');
  if (portalNode && portalNode.parentNode && close) {
    React.unmountComponentAtNode(portalNode);
    portalNode.parentNode.removeChild(portalNode);
    portalNode = null;
  }
}