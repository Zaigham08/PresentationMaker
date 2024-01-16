using System.ComponentModel.DataAnnotations;

namespace PresentationMaker.Models
{
    public class Presentation
    {
        [Required]
        public string? Topic { get; set; }

        public string? Instructions { get; set; }

        public string? SelectedOption { get; set; }

        public int NumPages { get; set; }
    }

}
