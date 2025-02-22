# JavaScript Bug: Unexpected Zero Return with Null Inputs

This repository demonstrates a subtle bug in a JavaScript function designed to add two numbers. The function unexpectedly returns 0 if either or both of the input arguments are null. This behavior may not be intuitive or desired in all contexts.

## Bug Description
The `foo` function aims to add two numbers. However, it returns 0 when either `a` or `b` (or both) is null.  This is a silent failure, and may lead to unexpected results in a larger application if not properly handled.

## Bug Solution
The solution involves explicitly handling null values, either by assigning a default value or throwing an error to indicate improper input.