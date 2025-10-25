#include <bits/stdc++.h>
using namespace std;

int main(){
    while(true){
        string D, N;
        cin >> D >> N;
        if(D == "0" && N == "0") break;

        string res;
        for(char c : N){
            if(c != D[0]) res.push_back(c);
        }

        if(res.empty()) cout << "0\n";
        else {
            // remove zeros à esquerda
            size_t pos = res.find_first_not_of('0');
            if(pos == string::npos) cout << "0\n";
            else cout << res.substr(pos) << "\n";
        }
    }
}
