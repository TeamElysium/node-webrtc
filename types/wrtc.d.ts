/// <reference lib="dom" />

declare module "wrtc" {
  declare namespace wrtc {
    export declare var MediaStream = global.MediaStream;
    export interface MediaStream extends globalThis.MediaStream {}
    export declare var MediaStreamTrack = global.MediaStreamTrack;
    export interface MediaStreamTrack extends globalThis.MediaStreamTrack {}
    export declare var RTCDataChannel = global.RTCDataChannel;
    export interface RTCDataChannel extends globalThis.RTCDataChannel {}
    export declare var RTCDataChannelEvent = global.RTCDataChannelEvent;
    export interface RTCDataChannelEvent
      extends globalThis.RTCDataChannelEvent {}
    export declare var RTCDtlsTransport = global.RTCDtlsTransport;
    export interface RTCDtlsTransport extends globalThis.RTCDtlsTransport {}
    export declare var RTCIceCandidate = global.RTCIceCandidate;
    export interface RTCIceCandidate extends globalThis.RTCIceCandidate {}
    export declare var RTCIceTransport = global.RTCIceTransport;
    export interface RTCIceTransport extends globalThis.RTCIceTransport {}
    export declare var RTCPeerConnection = global.RTCPeerConnection;
    export interface RTCPeerConnection extends globalThis.RTCPeerConnection {}
    export declare var RTCPeerConnectionIceEvent =
      global.RTCPeerConnectionIceEvent;
    export interface RTCPeerConnectionIceEvent
      extends globalThis.RTCPeerConnectionIceEvent {}
    export declare var RTCRtpReceiver = global.RTCRtpReceiver;
    export interface RTCRtpReceiver extends globalThis.RTCRtpReceiver {}
    export declare var RTCRtpSender = global.RTCRtpSender;
    export interface RTCRtpSender extends globalThis.RTCRtpSender {}
    export declare var RTCRtpTransceiver = global.RTCRtpTransceiver;
    export interface RTCRtpTransceiver extends globalThis.RTCRtpTransceiver {}
    export declare var RTCSctpTransport = global.RTCSctpTransport;
    export interface RTCSctpTransport extends globalThis.RTCSctpTransport {}
    export declare var RTCSessionDescription = global.RTCSessionDescription;
    export interface RTCSessionDescription
      extends globalThis.RTCSessionDescription {}
    export declare var getUserMedia = global.getUserMedia;
    export interface getUserMedia extends globalThis.getUserMedia {}
    export declare var mediaDevices = global.mediaDevices;
    export interface mediaDevices extends globalThis.mediaDevices {}
    export declare var nonstandard = global.nonstandard;
    export interface nonstandard extends globalThis.nonstandard {}
  }

  export = wrtc;
}

// declare module 'wrtc' {
//   export declare var MediaStream = global.MediaStream;
//   export interface MediaStream extends globalThis.MediaStream {}

//   export declare var MediaStreamTrack = global.MediaStreamTrack;
//   export interface MediaStreamTrack extends globalThis.MediaStreamTrack {}

//   export declare var RTCDataChannel = global.RTCDataChannel;
//   export interface RTCDataChannel extends globalThis.RTCDataChannel {}

//   export declare var RTCDataChannelEvent = global.RTCDataChannelEvent;
//   export interface RTCDataChannelEvent extends globalThis.RTCDataChannelEvent {}

//   export declare var RTCDtlsTransport = global.RTCDtlsTransport;
//   export interface RTCDtlsTransport extends globalThis.RTCDtlsTransport {}

//   export declare var RTCIceCandidate = global.RTCIceCandidate;
//   export interface RTCIceCandidate extends globalThis.RTCIceCandidate {}

//   export declare var RTCIceTransport = global.RTCIceTransport;
//   export interface RTCIceTransport extends globalThis.RTCIceTransport {}

//   export declare var RTCPeerConnection = global.RTCPeerConnection;
//   export interface RTCPeerConnection extends globalThis.RTCPeerConnection {}

//   export declare var RTCPeerConnectionIceEvent =
//     global.RTCPeerConnectionIceEvent;
//   export interface RTCPeerConnectionIceEvent
//     extends globalThis.RTCPeerConnectionIceEvent {}

//   export declare var RTCRtpReceiver = global.RTCRtpReceiver;
//   export interface RTCRtpReceiver extends globalThis.RTCRtpReceiver {}

//   export declare var RTCRtpSender = global.RTCRtpSender;
//   export interface RTCRtpSender extends globalThis.RTCRtpSender {}

//   export declare var RTCRtpTransceiver = global.RTCRtpTransceiver;
//   export interface RTCRtpTransceiver extends globalThis.RTCRtpTransceiver {}

//   export declare var RTCSctpTransport = global.RTCSctpTransport;
//   export interface RTCSctpTransport extends globalThis.RTCSctpTransport {}

//   export declare var RTCSessionDescription = global.RTCSessionDescription;
//   export interface RTCSessionDescription
//     extends globalThis.RTCSessionDescription {}

//   export declare var getUserMedia = global.getUserMedia;
//   export interface getUserMedia extends globalThis.getUserMedia {}

//   export declare var mediaDevices = global.mediaDevices;
//   export interface mediaDevices extends globalThis.mediaDevices {}

//   export declare var nonstandard = global.nonstandard;
//   export interface nonstandard extends globalThis.nonstandard {}

//   declare const wrtc: {
//     MediaStream: MediaStream;
//     MediaStreamTrack: MediaStreamTrack;
//     RTCDataChannel: RTCDataChannel;
//     RTCDataChannelEvent: RTCDataChannelEvent;
//     RTCDtlsTransport: RTCDtlsTransport;
//     RTCIceCandidate: RTCIceCandidate;
//     RTCIceTransport: RTCIceTransport;
//     RTCPeerConnection: RTCPeerConnection;
//     RTCPeerConnectionIceEvent: RTCPeerConnectiosnIceEvent;
//     RTCRtpReceiver: RTCRtpReceiver;
//     RTCRtpSender: RTCRtpSender;
//     RTCRtpTransceiver: RTCRtpTransceiver;
//     RTCSctpTransport: RTCSctpTransport;
//     RTCSessionDescription: RTCSessionDescription;
//     getUserMedia: typeof navigator.mediaDevices['getUserMedia'];
//     mediaDevices: typeof navigator.mediaDevices;
//   };

//   // export interface RTCPeerConnection extends globalThis.RTCPeerConnection {}
//   // export declare var RTCPeerConnection = global.RTCPeerConnection;

//   // export type WRTC = typeof wrtc;
//   export default wrtc;
// }
