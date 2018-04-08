import { Model } from './model';

export abstract class Relation {
  protected _default: any = null;
  private _attribute: string;
  private _callback: Function;
  private _type: string;
  private _model: any;

  constructor(type: string, attribute: string, model: any, callback?: Function) {
    this._attribute = attribute;
    this._model = model;
    this._type = type;
    this._callback = callback;
  }

  // TODO: model interface
  abstract set(value: any): any;

  abstract update(value: any, target: any);

  get default() {
    return this._default;
  }

  get attribute(): string {
    return this._attribute;
  }

  get type(): string {
    return this._type;
  }

  get model(): any {
    return this._model;
  }

  get callback(): Function {
    return this._callback;
  }

  get has_callback(): boolean {
    return typeof this._callback === 'function';
  }
}