#include <stdio.h>
#include <ctype.h>
#include <limits.h>
#include <float.h>
#include <signal.h>

double atof(char s[]);

int my_atof(char *string, double *pnumber) {
  /* Convert char string to double data type. */
  double retval;
  double one_tenth = 0.1;
  double ten = 10.0;
  double zero = 0.0;
  int found_digits = 0;
  int is_negative = 0;
  char *num;
  /* Check pointers. */
  if (pnumber == 0) {
    return 0;
  }
  if (string == 0) {
    *pnumber = zero;
    return 0;
  }
  retval = zero;
  num = string;
  /* Advance past white space. */
  while (isspace(*num))
    num++;
  /* Check for sign. */
  if (*num == '+') {
    num++;
  } else if (*num == '-') {
    is_negative = 1;
    num++;
  }
  /* Calculate the integer part. */
  while (isdigit(*num)) {
    found_digits = 1; retval *= ten;
    retval += *num - '0';
    num++;
  }
  /* Calculate the fractional part. */
  if (*num == '.') {
    double scale = one_tenth;
    num++;
    while (isdigit(*num)) {
      found_digits = 1;
      retval += scale * (*num - '0');
      num++;
      scale *= one_tenth;
    }
  }
  /* If this is not a number, return error condition. */
  if (!found_digits) {
    *pnumber = zero;
    return 0;
  }
  /* If all digits of integer & fractional part are 0, return 0.0 */
  if (retval == zero) {
    *pnumber = zero;
    return 1; /* Not an error condition, and no need to * continue. */
  }
  /* Process the exponent (if any) */
  if ((*num == 'e') || (*num == 'E')) {
    int neg_exponent = 0;
    int get_out = 0;
    long index;
    long exponent = 0;
    double getting_too_big = DBL_MAX * one_tenth;
    double getting_too_small = DBL_MIN * ten;
    num++;
    if (*num == '+') {
      num++;
    } else if (*num == '-') {
      num++;
      neg_exponent = 1;
    }
    /* What if the exponent is empty?  Return the current result. */
    if (!isdigit(*num)) {
      if (is_negative)
        retval = -retval;
      *pnumber = retval;
      return (1);
    }
    /* Convert char exponent to number <= 2 billion. */
    while (isdigit(*num) && (exponent < LONG_MAX / 10)) {
      exponent *= 10;
      exponent += *num - '0';
      num++;
    }
    /* Compensate for the exponent. */
    if (neg_exponent) {
      for (index = 1; index <= exponent && !get_out; index++)
        if (retval < getting_too_small) {
          get_out = 1;
          retval = DBL_MIN;
        } else
          retval *= one_tenth;
    } else
      for (index = 1; index <= exponent && !get_out; index++) {
        if (retval > getting_too_big) {
          get_out = 1;
          retval = DBL_MAX;
        } else
          retval *= ten;
      }
  }
  if (is_negative)
    retval = -retval;
  *pnumber = retval;
  return (1);
}

int main(int argc, const char *argv[])
{
  printf("%g\n", atof("-1.51"));
  return 0;
}

double atof(char s[]) {
  double d = 0.0;
  if(!my_atof(s, &d)) {
    raise(SIGFPE);
  }
  return d;
}
