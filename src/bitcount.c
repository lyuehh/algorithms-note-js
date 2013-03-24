#include <stdio.h>

int bitcount(unsigned x);
int bitcount2(unsigned x);

int main(int argc, const char *argv[])
{
  int i = 46;
  printf("%d\n", bitcount(46));
  printf("%d\n", bitcount2(46));
  return 0;
}


int bitcount(unsigned x){
  int b;

  for(b=0; x != 0; x >>= 1) {
    if(x & 01) {
      b++;
    }
  }
  return b;
}

int bitcount2(unsigned x){
  int b;

  for(b=0; x != 0; x &= (x-1)) {
    b++;
  }
  return b;
}
