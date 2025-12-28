
ARG DOTNET_VERSION=10.0

FROM mcr.microsoft.com/dotnet/sdk:$DOTNET_VERSION AS build
WORKDIR /App

# Copy everything
COPY . ./
# Restore as distinct layers
RUN dotnet restore
# Build and publish a release
RUN dotnet publish -o out

# Build runtime image
FROM mcr.microsoft.com/dotnet/aspnet:$DOTNET_VERSION
WORKDIR /App
COPY --from=build /App/out .

EXPOSE 5257
ENTRYPOINT ["dotnet", "backend.dll"]
