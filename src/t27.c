#include <stdio.h>

unsigned invert(unsigned x, int p, int n) {
  return x ^ (~(~0 << n) << p);
}
int main(void) {
  unsigned x;
  int p, n;
  for(x = 0; x < 700; x += 49)
    for(n = 1; n < 8; n++)
      for(p = 1; p < 8; p++)
        printf("%u, %d, %d: %u\n", x, n, p, invert(x, n, p));
  return 0;
}
