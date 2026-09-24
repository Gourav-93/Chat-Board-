using Backend.Models;
using Backend.Services;
using Microsoft.AspNetCore.Mvc;

namespace Backend.Controllers;

[ApiController]
[Route("api/chat")]
public class ChatController(IGeminiService geminiService) : ControllerBase
{
    [HttpPost]
    public async Task<IActionResult> SendMessage(ChatRequest request)
    {
        if (string.IsNullOrWhiteSpace(request.Message))
            return BadRequest("Message cannot be empty.");

        try
        {
            var response = await geminiService.GetResponseAsync(request.Message);
            return Ok(new ChatResponse { Response = response });
        }
        catch (Exception ex)
        {
            return StatusCode(500, ex.Message);
        }
    }
}