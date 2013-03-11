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

  printf("%d", '\r');

  while((c=getchar() != EOF)) {
    printf("[%c]", c);
    nc++;
    if(c == '\r') {
      nl++;
    }
  }

  printf("\nChar: %d\n", nc);
  printf("Line: %d", nl);
  return 0;
}
