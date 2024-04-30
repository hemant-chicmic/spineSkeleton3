import { _decorator, Component, sp, Label, Node } from 'cc';
 const { ccclass, property } = _decorator;

 @ccclass('SpineAttach')
 export class SpineAttach extends Component {

    @property({ type: sp.Skeleton })
    skeleton: sp.Skeleton = null!;

    @property({ type: Node })
    attachNode: Node = null!;

    start () 
    {
        let socket = new sp.SpineSocket("root/hip/tail1/tail2/tail3/tail4/tail5/tail6/tail7/tail8/tail9/tail10", this.attachNode); // The first incoming parameter is the target bone of the attachment, and the second incoming parameter is the node of the attachment.
        this.skeleton!.sockets.push(socket);
        this.skeleton!.sockets = this.skeleton!.sockets;
    }


 }