#include <stdio.h>

void escape(char *s, char *t);
void unescape(char *s, char*t);

int main(int argc, const char *argv[])
{
  char text1[50] = "\aHello,\n\tWorld! Mistakee\b was \"Extra 'e'\"!\n";
  char text2[51];
  printf("Original string:\n%s\n", text1);
  escape(text2, text1);
  printf("Escaped string:\n%s\n", text2);
  unescape(text1, text2);
  printf("Unescaped string:\n%s\n", text1);
  return 0;
}
void escape(char *s, char *t) {
  int i,j;
  i = j = 0;

  while(t[i]) {
    switch(t[i]) {
      case '\n':
        s[j++] = '\\';
        s[j] = 'n';
        break;
      case '\t':
        s[j++] = '\\';
        s[j] = 't';
        break;
      case '\\':
        s[j++] = '\\';
        s[j] = '\\';
        break;
      default:
        s[j] = t[i];
        break;
    }
    ++i;
    ++j;
  }
  s[j] = t[i];
}
void unescape(char *s, char *t) {
  int i,j;
  i = j = 0;

  while(t[i]) {
    switch(t[i]) {
      case '\\':
        switch(t[++i]) {
          case 'n':
            s[j] = '\n';
            break;
          case 't':
            s[j] = '\t';
            break;
          case '\\':
            s[j] = '\\';
            break;
          default:
            s[j++] = '\\';
            s[j] = t[i];
        }
        break;
      default:
        s[j] = t[i];
        break;
    }
    ++i;
    ++j;
  }
  s[j] = t[i];
}
