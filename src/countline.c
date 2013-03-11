#include <stdio.h>

int main(int argc, const char *argv[])
{
  int nc, nl;
  int c;
  nl = 0;

  /* for(nc=0;c=getchar() != EOF;nc++) { */
  /*   if(c == '\n') { */
  /*     nl++; */
  /*   } */
  /* } */

  int done = 0;
  while(done==0) {
    c=getchar();
    nc++;
    if(c == '\n') {
      nl++;
    }
    if(c == EOF) {
      done = 1;
    }
  }

  printf("\nChar: %d\n", nc);
  printf("Line: %d", nl);
  return 0;
}
