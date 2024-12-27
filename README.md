# JavaScript Function Bug: Handling Undefined Values

This repository demonstrates a common JavaScript bug related to handling undefined values in functions.  The `foo` function attempts to add two numbers but only explicitly checks for `null` values.  This leads to unexpected behavior (NaN) when `undefined` is passed as an argument.

The `bug.js` file contains the buggy code.  The `bugSolution.js` file provides a corrected version that addresses the issue by checking for both `null` and `undefined` values.

## Bug Description

The original `foo` function only handles `null` values correctly. When it receives an `undefined` value, the addition operation results in `NaN`. This can lead to unexpected errors and program crashes, especially in larger applications.  A robust function should correctly handle both `null` and `undefined` inputs.

## Solution

The solution involves modifying the conditional statement to explicitly check for both `null` and `undefined` values.  Using loose equality (`==`) in this case is acceptable and improves readability as it directly checks for the absence of a value.