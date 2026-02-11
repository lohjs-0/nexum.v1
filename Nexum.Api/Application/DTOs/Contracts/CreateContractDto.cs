using System;

namespace Nexum.Api.DTOs.Contracts
{
    public class CreateContractDto
    {
        public string Title { get; set; } = string.Empty;
        public string Company { get; set; } = string.Empty;
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
    }
}
