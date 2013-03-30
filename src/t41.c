#include <stdio.h>

#define MAXLINE 1000

int getline1(char line[], int max);
int strindex(char source[], char s);


int main(int argc, const char *argv[])
{
  char line[MAXLINE];
  int found = 0;

  printf("%d\n", strindex("abcdooosss", 'o'));
  return found;
}

int getline1(char s[], int lim) {
  int c, i;

  i = 0;
  while (--lim > 0 && (c=getchar()) != EOF && c != '\n') {
    s[i++] = c;
  }
  if(c == '\n') {
    s[i++] = c;
  }
  s[i] = '\0';
  return i;
}

int strindex(char s[], char t) {
  int i, count = -1;

  for (i = 0; s[i] != '\0'; i++) {
    if(s[i] == t) {
      count = i;
    }
  }
  return count;
}
