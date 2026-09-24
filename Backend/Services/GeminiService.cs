using System.Text;
using System.Text.Json;

namespace Backend.Services
{
    public class GeminiService : IGeminiService
    {
        private readonly IConfiguration _config;
        private readonly HttpClient _client;

        public GeminiService(IConfiguration config, HttpClient client)
        {
            _config = config;
            _client = client;
        }

        public async Task<string> GetResponseAsync(string message)
        {
            var key = _config["Gemini:ApiKey"];
            var model = _config["Gemini:Model"];

            var body = JsonSerializer.Serialize(new
            {
                contents = new[]
                {
                    new { parts = new[] { new { text = message } } }
                }
            });

            var request = new HttpRequestMessage(
                HttpMethod.Post,
                $"https://generativelanguage.googleapis.com/v1beta/models/{model}:generateContent");

            request.Headers.Add("x-goog-api-key", key);
            request.Content = new StringContent(body, Encoding.UTF8, "application/json");

            var response = await _client.SendAsync(request);
            var result = await response.Content.ReadAsStringAsync();

            if (!response.IsSuccessStatusCode)
                throw new Exception(result);

            using var json = JsonDocument.Parse(result);

            return json.RootElement
                .GetProperty("candidates")[0]
                .GetProperty("content")
                .GetProperty("parts")[0]
                .GetProperty("text")
                .GetString() ?? "No response received.";
        }
    }
}