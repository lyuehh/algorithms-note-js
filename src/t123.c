#include <stdio.h>
#define MAXLINE 1000 /* max input line size */

char line[MAXLINE]; /*current input line*/
int getline1(void); /* taken from the KnR book. */

int main() {
  int in_comment,len;
  int in_quote;
  int t;

  in_comment = in_quote = t = 0;

  while ((len = getline1()) > 0 ) {
    t=0;
    while(t < len) {
      if( line[t] == '"')
        in_quote = 1;
      if( ! in_quote ) {
        if( line[t] == '/' && line[t+1] == '*') {
          t=t+2;
          in_comment = 1;
        }
        if( line[t] == '*' && line[t+1] == '/') {
          t=t+2;
          in_comment = 0;
        }
        if(in_comment == 1) {
          t++;
        } else {
          printf ("%c", line[t]);
          t++;
        }
      } else {
        printf ("%c", line[t]);
        t++;
      }
    }
  } return 0;
}

int getline1(void) {
  int c, i;
  extern char line[];
  for ( i=0;i<MAXLINE-1 && ( c=getchar()) != EOF && c != '\n'; ++i)
    line[i] = c;
  if(c == '\n') {
    line[i] = c;
    ++i;
  }
  line[i] = '\0';
  return i;
}
