using Nexum.Api.DTOs.Contracts;

namespace Nexum.Api.Services.Contracts
{
    public interface IContractService
    {
        IEnumerable<ContractResponseDto> GetAll();
        ContractResponseDto Create(CreateContractDto dto);
    }
}
