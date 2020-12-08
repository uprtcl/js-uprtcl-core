import { CASSource } from './cas-source';

/**
 * A CASStore is a CASSource that can also store generic objects, returning their hash
 */
export interface CASStore extends CASSource {
  /**
   * Create the given object and returns its hash, as computed by the service
   *
   * @param object the object to store
   * @param hash (optional) the hash of the object with which it will be stored. If not given the default cidConfig will be used to calculate the hash
   * @param attempts (optional) the attempts the function will try to create. If not given, create will only try to post once.
   * @returns the hash of the object
   * @throws error if a hash was provided and it didn't match the generated hash
   * @thorws error if attempts to create are exceeded.
   */
  create(object: object, hash?: string, attempts?: number): Promise<string>;
}
