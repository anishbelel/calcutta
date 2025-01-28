#include <bits/stdc++.h>
#include <cstdlib>
using namespace std;

#define pp pair<int, int>

vector<string> path;
vector<list<pp>> gr;
unordered_map<string, int> vertexIndex;
unordered_map<int, string> indexVertex;
int n = 500;
vector<int> dist(n, INT_MAX);
vector<string> via(n, "");

void add_edge(const string &u, const string &v, int wt)
{
    int idx_u = vertexIndex[u];
    int idx_v = vertexIndex[v];
    gr[idx_u].push_back({idx_v, wt});
    gr[idx_v].push_back({idx_u, wt});
}

int dijkstra(const string &src_str, const string &tar_str)
{
    priority_queue<pp, vector<pp>, greater<pp>> pq;
    map<int, int> visited;

    int src = vertexIndex[src_str];
    int tar = vertexIndex[tar_str];

    dist[src] = 0;
    pq.push({0, src});

    while (!pq.empty())
    {
        pp curr = pq.top();
        pq.pop();
        int u = curr.second;
        int d = curr.first;

        if (visited.count(tar))
            return dist[tar];

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
                    via[v] = indexVertex[u];
                    pq.push({dist[v], v});
                }
            }
        }
    }
    int total_time = vertexIndex[tar_str];
    return dist[total_time];
}

void print(const string &src, const string &tar)
{
    if (tar == src)
    {
        path.push_back(src);
        return;
    }
    else
    {
        path.push_back(tar);
        print(src, via[vertexIndex[tar]]);
    }
}

int main(int argc, char *argv[])
{
    gr.resize(n);

    vector<vector<string>> edges = {
        {"tarakeswar", "loknath", "4"},
        {"loknath", "bahirkhanda", "5"},
        {"bahirkhanda", "kaikala", "3"},
        {"kaikala", "haripal", "3"},
        {"haripal", "malia", "3"},
        {"malia", "naliku", "3"},
        {"naliku", "kamarkundu", "4"},
        {"kamarkundu", "singur", "3"},
        {"singur", "nashibpur", "4"},
        {"nashibpur", "diara", "3"},
        {"diara", "sheoraphuli", "12"},
        {"sheoraphuli", "shrirampur", "5"},
        {"shrirampur", "rishra", "4"},
        {"rishra", "konnagar", "4"},
        {"konnagar", "hindmotor", "2"},
        {"hindmotor", "uttarpara", " 3"},
        {"uttarpara", "bally", "2 "},
        {"bally", "belur", "3"},
        {"belur", "liluah", "4"},
        {"liluah", "howrah", "13"},

        {"barddhaman", "gangpur", "7"},
        {"gangpur", "saktigarh", "5"},
        {"saktigarh", "pallaroad", "5"},
        {"pallaroad", "chanchai", "3"},
        {"chanchai", "masagram", "3"},
        {"masagram", "nabagram", "3"},
        {"nabagram", "jaugram", "4"},
        {"jaugram", "jhapandanga", "3"},
        {"jhapandanga", "gurap", "5"},
        {"gurap", "hajigarh", "3 "},
        {"hajigarh", "cheragram", "3"},
        {"cheragram", "sibaichandi", "2"},
        {"sibaichandi", "dhaniakhali", "5"},
        {"dhaniakhali", "belmuri", "3"},
        {"madhusudanpur", "kamarkundu", "4"},
        {"chandanpur", "madhusudanpur", "4"},
        {"porabazar", "chandanpur", "4"},
        {"belmuri", "porabazar", "2"},

        {"dankuni", "belanagar", "3"},
        {"bally", "belanagar", "3"},
        {"bally", "ballyhalt", "1"},
        {"ballyhalt", "rajchandrapur", "4 "},
        {"rajchandrapur", "dankuni", "3 "},
        {"dankuni", "gobra", "8"},
        {"gobra", "janairoad", "3 "},
        {"janairoad", "begampur", " 3"},
        {"begampur", "baruipara", "3 "},
        {"baruipara", "mirzapur", " 3"},
        {"mirzapur", "balarambati", " 3"},
        {"balarambati", "kamarkundu", "3 "},

        {"saktigarh", "palsit", "3"},
        { "palsit","rasulpur", "4"},
        { "rasulpur","nimo", "4"},
        { "nimo","memari", "3"},
        { "memari","begila", "3"},
        { "begila","debipur", "4"},
        { "debipur","bainchi", "3"},
        { "bainchi","bainchigram", "3"},
        { "bainchigram","simlagarh", "3"},
        { "simlagarh","pundooah", "4"},
        { "pundooah","khanyan", "5"},
        { "khanyan", "talandu","4"},
        {  "talandu","magra","4"},
        {  "magra","adisaptagram","4"},
        {  "adisaptagram","bandel","4"},

        {  "bandel","hooghly","5"},
        {  "hooghly","chunchura","2"},
        {  "chunchura","chandannagar","4"},
        {  "chandannagar","mankundu","2"},
        {  "mankundu","bhadreswar","3"},
        {  "bhadreswar","baidyabati","3"},
        {  "baidyabati","sheoraphuli","2"},

        {  "katwa","dainhat","9"},
        {  "dainhat","sahebtala","4"},
        {  "sahebtala","agradwip","3"},
        {  "agradwip","patuli", "5"},
        {  "patuli","belarhat", "5"},
        {  "belarhat","lashmipur", "3"},
        // ........................ station gap aleart!!!!
        {  "lashmipur","banshbaria", "86"},
        {  "banshbaria","bandel", "7"},

        {  "bandel","hooghlyghat", "6"},
        {  "hooghlyghat","garifa", "4"},
        {  "garifa","naihati", "10"},

        {  "bally","ballyghat", "1"},
        {  "ballyghat","dakshineswar", "4"},
        {  "dakshineswar","baranagar", "3"},
        {  "baranagar","dumdum", "6"},

        // Going towards kolkata------->

        {  "ranaghat","pryradanga", "6"},
        // ........................ station gap aleart!!!!
        {  "pryradanga","kalyani", "20"},
        {  "kalyani","kanchrapara", "3"},
        {  "kanchrapara","halisahar", "3"},
        {  "halisahar","naihati", "9"},

        {  "shantipur","bathna", "4"},
        {  "bathna","phulia", "4"},
        {  "phulia","habibpur", "5"},
        {  "habibpur","kalinarayanpur", "4"},
        {  "kalinarayanpur","ranaghat", "12"},

        {  "krishnanagarcity","jalalkhali", "4"},
        {  "jalalkhali","badkulla", "5"},
        {  "badkulla","taherpur", "5"},
        {  "taherpur","birnagar", "3"},
        {  "birnagar","kalinarayanpur", "6"},

        {  "gede","harishnagar", "4"},
        // ........................ station gap aleart!!!!
        {  "harishnagar","ranaghat", "48"},

        {  "naihati","kankinara", "5"},
        {  "kankinara","jagaddal", "3"},
        {  "jagaddal","shyamnagar", "3"},
        {  "shyamnagar","ichhapur", "4"},
        {  "shyamnagar","palta", "3"},
        {  "palta","barrackpore", "4"},
        {  "barrackpore","titagarh", "3"},
        {  "titagarh","khardaha", "3"},
        {  "khardaha","sodpur", "4"},
        {  "sodpur","agarpara", "3"},
        {  "agarpara","belgharia", "3"},
        {  "belgharia","dumdum", "8"},

        {  "barasat","hridaypur", "3"},
        // ........................ station gap aleart!!!!
        {  "hridaypur","dumdum", "24"},


    };

    int vertexIndexCounter = 0;
    for (auto &edge : edges)
    {
        string u = edge[0];
        string v = edge[1];
        int weight = stoi(edge[2]);

        if (vertexIndex.find(u) == vertexIndex.end())
        {
            vertexIndex[u] = vertexIndexCounter;
            indexVertex[vertexIndexCounter] = u;
            vertexIndexCounter++;
        }
        if (vertexIndex.find(v) == vertexIndex.end())
        {
            vertexIndex[v] = vertexIndexCounter;
            indexVertex[vertexIndexCounter] = v;
            vertexIndexCounter++;
        }

        add_edge(u, v, weight);
    }

    if (argc != 3)
    {
        cerr << "Usage: " << argv[0] << " <source> <target>" << endl;
        return 1;
    }

    string src_str = argv[1];
    string tar_str = argv[2];

    int ans = dijkstra(src_str, tar_str);
    print(src_str, tar_str);

    reverse(path.begin(), path.end());
    cout << ans << " ";
    for (int i = 0; i < path.size(); ++i)
    {
        cout << path[i];
        if (i < path.size() - 1)
            cout << " ";
    }
    cout << endl;

    return 0;
}
