using System.ComponentModel.DataAnnotations;

namespace PresentationMaker.Models
{
    public class ChatPresentation
    {
        [Required]
        public string? Prompt { get; set; }
    }
}
