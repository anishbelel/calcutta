#include <bits/stdc++.h>
#define pp pair<int, int>
using namespace std;

vector<list<pp>> gr;
int n = 7;
vector<int> dist(n, INT_MAX);
vector<int> via(n, -1);

void add_edge(int u, int v, int wt)
{
    gr[u].push_back({v, wt});
    gr[v].push_back({u, wt});
}

int dijkstra(int src,int tar)
{
    priority_queue<pp, vector<pp>, greater<pp>> pq;
    map<int, int> visited;
    dist[src] = 0;
    pq.push({0, src});
    while (!pq.empty())
    {
        pp curr = pq.top();
        pq.pop();
        int u = curr.second;
        int d = curr.first;
        if (visited.count(tar)) return dist[tar];
        visited[u]++;
        for (auto itr : gr[u])
        {
            int v = itr.first;
            int weight = itr.second;
            if (!visited.count(v))
            {
                if (dist[v] > (d + weight))
                {
                    dist[v] = d + weight;
                    via[v] = u;
                    pq.push({dist[v], v});
                }
            }
        }
    }
    return dist[tar];
}
void print(int src,int tar){
        if(tar==src) cout<<src;
        else {
            cout<<tar<<"<--";
            print(src,via[tar]);
        }
    }

int main()
{

    gr.resize(n);

    vector<vector<int>> edge = {
        {0, 1, 7},
        {0, 2, 2},
        {3, 2, 1},
        {1, 3, 2},
        {2, 4, 2},
        {5, 4, 5},
        {5, 6, 1},
        {6, 4, 3}
        
    };

    

    for (int i = 0; i < edge.size(); i++)
    {
        add_edge(edge[i][0], edge[i][1], edge[i][2]);
    }
    int src ;
    int tar ;
    cin>>src>>tar;

    int ans = dijkstra(src,tar);
    for (int i = 0; i < n; i++)
    {
        cout << "Node " << i << ": Distance = " << dist[i] << ", Via = " << via[i] << endl;
    }
    
    cout<<"The min dist is : "<< ans<<endl;
    print(src,tar);

    return 0;
}