<!--

@license Apache-2.0

Copyright (c) 2026 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# svander

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Generate a single-precision floating-point Vandermonde matrix.

<section class="intro">

</section>

<!-- /.intro -->

<section class="installation">

## Installation

```bash
npm install @stdlib/blas-ext-base-svander
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm`][esm-url] branch (see [README][esm-readme]).
-   If you are using Deno, visit the [`deno`][deno-url] branch (see [README][deno-readme] for usage intructions).
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd`][umd-url] branch (see [README][umd-readme]).

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

To view installation and usage instructions specific to each branch build, be sure to explicitly navigate to the respective README files on each branch, as linked to above.

</section>

<section class="usage">

## Usage

```javascript
var svander = require( '@stdlib/blas-ext-base-svander' );
```

#### svander( order, mode, M, N, x, strideX, out, ldo )

Generates a single-precision floating-point Vandermonde matrix.

```javascript
var Float32Array = require( '@stdlib/array-float32' );

var x = new Float32Array( [ 1.0, 2.0, 3.0 ] );
var out = new Float32Array( 9 );

svander( 'row-major', -1, 3, 3, x, 1, out, 3 );
// out => <Float32Array>[ 1.0, 1.0, 1.0, 4.0, 2.0, 1.0, 9.0, 3.0, 1.0 ]
```

The function has the following parameters:

-   **order**: row-major (C-style) or column-major (Fortran-style) order.
-   **mode**: mode. If `mode < 0`, the function generates decreasing powers. If `mode > 0`, the function generates increasing powers.
-   **M**: number of rows in `out`.
-   **N**: number of columns in `out`.
-   **x**: input [`Float32Array`][@stdlib/array/float32].
-   **strideX**: stride length for `x`.
-   **out**: output matrix stored in linear memory as a [`Float32Array`][@stdlib/array/float32].
-   **ldo**: stride between successive contiguous vectors of the matrix `out` (a.k.a., leading dimension of the matrix `out`).

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

<!-- eslint-disable stdlib/capitalized-comments, max-len -->

```javascript
var Float32Array = require( '@stdlib/array-float32' );

// Initial arrays:
var x0 = new Float32Array( [ 999.0, 1.0, 2.0, 3.0 ] );
var out0 = new Float32Array( 10 );

// Create offset views:
var x1 = new Float32Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 );       // start at 2nd element
var out1 = new Float32Array( out0.buffer, out0.BYTES_PER_ELEMENT*1 ); // start at 2nd element

svander( 'row-major', 1, 3, 3, x1, 1, out1, 3 );
// out0 => <Float32Array>[ 0.0, 1.0, 1.0, 1.0, 1.0, 2.0, 4.0, 1.0, 3.0, 9.0 ]
```

When the mode is positive, the matrix is generated such that

```text
[
    1   x_0^1   x_0^2   ...   x_0^(N-1)
    1   x_1^1   x_1^2   ...   x_1^(N-1)
    ...
]
```

with increasing powers along the rows.

When the mode is negative, the matrix is generated such that

```text
[
    x_0^(N-1)   ...   x_0^2   x_0^1   1
    x_1^(N-1)   ...   x_1^2   x_1^1   1
    ...
]
```

with decreasing powers along the rows.

<!-- lint disable maximum-heading-length -->

#### svander.ndarray( mode, M, N, x, strideX, offsetX, out, strideOut1, strideOut2, offsetOut )

<!-- lint enable maximum-heading-length -->

Generates a single-precision floating-point Vandermonde matrix using alternative indexing semantics.

```javascript
var Float32Array = require( '@stdlib/array-float32' );

var x = new Float32Array( [ 1.0, 2.0, 3.0 ] );
var out = new Float32Array( 9 );

svander.ndarray( -1, 3, 3, x, 1, 0, out, 3, 1, 0 );
// out => <Float32Array>[ 1.0, 1.0, 1.0, 4.0, 2.0, 1.0, 9.0, 3.0, 1.0 ]
```

The function has the following additional parameters:

-   **offsetX**: starting index for `x`.
-   **strideOut1**: stride length for the first dimension of `out`.
-   **strideOut2**: stride length for the second dimension of `out`.
-   **offsetOut**: starting index for `out`.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying buffer, offset parameters support indexing semantics based on starting indices. For example, to use every other element from the input array starting from the second element:

```javascript
var Float32Array = require( '@stdlib/array-float32' );

var x = new Float32Array( [ 0.0, 1.0, 0.0, 2.0, 0.0, 3.0 ] );
var out = new Float32Array( 9 );

svander.ndarray( 1, 3, 3, x, 2, 1, out, 3, 1, 0 );
// out => <Float32Array>[ 1.0, 1.0, 1.0, 1.0, 2.0, 4.0, 1.0, 3.0, 9.0 ]
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If `M <= 0` or `N <= 0`, both functions return the output matrix unchanged.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random-array-discrete-uniform' );
var Float32Array = require( '@stdlib/array-float32' );
var svander = require( '@stdlib/blas-ext-base-svander' );

var M = 3;
var N = 4;

var x = discreteUniform( M, 0, 10, {
    'dtype': 'float32'
});
var out = new Float32Array( M*N );

svander( 'row-major', -1, M, N, x, 1, out, N );
console.log( out );
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->

* * *

<section class="c">

## C APIs

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- C usage documentation. -->

<section class="usage">

### Usage

```c
#include "stdlib/blas/ext/base/svander.h"
```

#### stdlib_strided_svander( order, mode, M, N, \*X, strideX, \*Out, LDO )

Generates a single-precision floating-point Vandermonde matrix.

```c
#include "stdlib/blas/base/shared.h"

const float x[ 3 ] = { 1.0f, 2.0f, 3.0f };
float Out[ 3*3 ] = { 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f };

stdlib_strided_svander( CblasRowMajor, -1.0f, 3, 3, x, 1, Out, 3 );
```

The function accepts the following arguments:

-   **order**: `[in] CBLAS_LAYOUT` storage layout.
-   **mode**: `[in] float` mode. If `mode < 0`, the function generates decreasing powers. If `mode > 0`, the function generates increasing powers.
-   **M**: `[in] CBLAS_INT` number of rows in `Out`.
-   **N**: `[in] CBLAS_INT` number of columns in `Out`.
-   **X**: `[in] float*` input array.
-   **strideX**: `[in] CBLAS_INT` stride length for `X`.
-   **Out**: `[out] float*` output matrix.
-   **LDO**: `[in] CBLAS_INT` stride between successive contiguous vectors of the matrix `Out` (a.k.a., leading dimension of the matrix `Out`).

```c
void API_SUFFIX(stdlib_strided_svander)( const CBLAS_LAYOUT order, const float mode, const CBLAS_INT M, const CBLAS_INT N, const float *X, const CBLAS_INT strideX, float *Out, const CBLAS_INT LDO );
```

<!-- lint disable maximum-heading-length -->

#### stdlib_strided_svander_ndarray( mode, M, N, \*X, strideX, offsetX, \*Out, strideOut1, strideOut2, offsetOut )

<!-- lint enable maximum-heading-length -->

Generates a single-precision floating-point Vandermonde matrix using alternative indexing semantics.

```c
#include "stdlib/blas/base/shared.h"

const float x[ 3 ] = { 1.0f, 2.0f, 3.0f };
float Out[ 3*3 ] = { 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f };

stdlib_strided_svander_ndarray( -1.0f, 3, 3, x, 1, 0, Out, 3, 1, 0 );
```

The function accepts the following arguments:

-   **mode**: `[in] float` mode. If `mode < 0`, the function generates decreasing powers. If `mode > 0`, the function generates increasing powers.
-   **M**: `[in] CBLAS_INT` number of rows in `Out`.
-   **N**: `[in] CBLAS_INT` number of columns in `Out`.
-   **X**: `[in] float*` input array.
-   **strideX**: `[in] CBLAS_INT` stride length for `X`.
-   **offsetX**: `[in] CBLAS_INT` starting index for `X`.
-   **Out**: `[out] float*` output matrix.
-   **strideOut1**: `[in] CBLAS_INT` stride length for the first dimension of `Out`.
-   **strideOut2**: `[in] CBLAS_INT` stride length for the second dimension of `Out`.
-   **offsetOut**: `[in] CBLAS_INT` starting index for `Out`.

```c
void API_SUFFIX(stdlib_strided_svander_ndarray)( const float mode, const CBLAS_INT M, const CBLAS_INT N, const float *X, const CBLAS_INT strideX, const CBLAS_INT offsetX, float *Out, const CBLAS_INT strideOut1, const CBLAS_INT strideOut2, const CBLAS_INT offsetOut );
```

</section>

<!-- /.usage -->

<!-- C API usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- C API usage examples. -->

<section class="examples">

### Examples

```c
#include "stdlib/blas/ext/base/svander.h"
#include "stdlib/blas/base/shared.h"
#include <stdio.h>

int main( void ) {
    // Define the input array:
    const float x[ 3 ] = { 1.0f, 2.0f, 3.0f };

    // Define a 3x3 output array stored in row-major order:
    float Out[ 3*3 ] = { 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f };

    // Specify the number of rows and columns:
    const int M = 3;
    const int N = 3;

    // Perform operation:
    stdlib_strided_svander( CblasRowMajor, -1.0f, M, N, x, 1, Out, N );

    // Print the result:
    for ( int i = 0; i < M; i++ ) {
        for ( int j = 0; j < N; j++ ) {
            printf( "Out[%i,%i] = %f\n", i, j, Out[ (i*N)+j ] );
        }
    }
}
```

</section>

<!-- /.examples -->

</section>

<!-- /.c -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2026. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/blas-ext-base-svander.svg
[npm-url]: https://npmjs.org/package/@stdlib/blas-ext-base-svander

[test-image]: https://github.com/stdlib-js/blas-ext-base-svander/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/blas-ext-base-svander/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/blas-ext-base-svander/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/blas-ext-base-svander?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/blas-ext-base-svander.svg
[dependencies-url]: https://david-dm.org/stdlib-js/blas-ext-base-svander/main

-->

[chat-image]: https://img.shields.io/badge/zulip-join_chat-brightgreen.svg
[chat-url]: https://stdlib.zulipchat.com

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/blas-ext-base-svander/tree/deno
[deno-readme]: https://github.com/stdlib-js/blas-ext-base-svander/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/blas-ext-base-svander/tree/umd
[umd-readme]: https://github.com/stdlib-js/blas-ext-base-svander/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/blas-ext-base-svander/tree/esm
[esm-readme]: https://github.com/stdlib-js/blas-ext-base-svander/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/blas-ext-base-svander/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/blas-ext-base-svander/main/LICENSE

[@stdlib/array/float32]: https://github.com/stdlib-js/array-float32

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

</section>

<!-- /.links -->
