<ContainerLine>
                  {results.segments.map(segment => {
                            return (segment.proposals.map(proposal => {
                                if (proposal.carWithDriverAttributes.luggageCapacity === "2") {
                                    return (<div>2 <Luggage size={size.small} color={color.purple}/></div>)
                                }
                            }))})}