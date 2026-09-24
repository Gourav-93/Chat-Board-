namespace Backend.Services
{
    public interface IGeminiService
    {
        Task<string> GetResponseAsync(string message);
    }
}