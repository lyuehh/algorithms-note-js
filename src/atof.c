#include <stdio.h>
#include <ctype.h>

double atof(char s[]);

int main(int argc, const char *argv[])
{
  printf("%g\n", atof("-.5"));
  return 0;
}

double atof(char s[]) {
  double val, power;
  int i, sign;

  for (i = 0; isspace(s[i]); i++) {
    ; // skip the space
  }
  sign = (s[i] == '-') ? -1 : 1;
  if(s[i] == '+' || s[i] == '-') {
    i++;
  }
  if(s[i] == '.') {
    i++;
  }
  for (power = 1.0; isdigit(s[i]); i++) {
    val = 10.0 * val + (s[i] - '0');
    power *= 10;
  }
  return sign * val / power;
}
