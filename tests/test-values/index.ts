import {Value} from './value';

import {UndefinedValues} from './undefined';
import {NullValues}      from './null';
import {NanValues}       from './nan';
import {SymbolValues}    from './symbol';
import {BooleanValues}   from './boolean';
import {StringValues}    from './string';
import {RegExpValues}    from './regexp';
import {FunctionValues}  from './function';
import {NumberValues}    from './number';
import {BigIntValues}    from './bigint';
import {ArrayValues}     from './array';
import {MapSetValues}    from './map, set, weak-map, weak-set';
import {ObjectValues}    from './object';

export default <Value[]>[
  ...UndefinedValues,
  ...NullValues,
  ...NanValues,
  ...SymbolValues,
  ...BooleanValues,
  ...StringValues,
  ...RegExpValues,
  ...FunctionValues,
  ...NumberValues,
  ...BigIntValues,
  ...ArrayValues,
  ...MapSetValues,
  ...ObjectValues,
]
