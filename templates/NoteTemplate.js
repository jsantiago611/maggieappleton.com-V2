import { MDXRemote } from "next-mdx-remote";
import ProseWrapper from "../components/mdx/ProseWrapper";
import Link from "next/link";
import styled from "styled-components";
import { breakpoints } from "../utils/breakpoints";
import GrowthIcon from "../components/icons/GrowthIcon";
import BackHoverLink from "../components/links/BackHoverLink";
import Dates from "../components/templates/Dates";
import GrowthStage from "../components/templates/GrowthStage";
import Topics from "../components/templates/Topics";
import Header from "../components/Header";
import BackToTop from "../components/mdx/BackToTop";
import Backlinks from "../components/templates/Backlinks";
import { TwitterReply } from "../components/templates/TwitterReply";

export default function NoteTemplate({
    source,
    frontMatter,
    components,
    slug,
    backlinks,
}) {
    return (
        <>
            <Header
                title={frontMatter.title}
                description={frontMatter.description}
                keywords={frontMatter.topics}
            />
            <HeaderSection>
                <div className="above-title">
                    <Link href="/notes">
                        <BackHoverLink href="/notes">notes</BackHoverLink>
                    </Link>
                    <GrowthIcon
                        size="16"
                        growthStage={frontMatter.growthStage}
                    />
                    <GrowthStage stage={frontMatter.growthStage} />
                </div>
                <TitleContainer>
                    <h1>{frontMatter.title}</h1>
                    {frontMatter.description && (
                        <p>{frontMatter.description}</p>
                    )}
                </TitleContainer>
                <Metadata style={{ display: "flex", flexDirection: "row" }}>
                    {frontMatter.topics && (
                        <Topics topics={frontMatter.topics} />
                    )}
                    <Dates
                        startDate={frontMatter.startDate}
                        updated={frontMatter.updated}
                    />
                </Metadata>
            </HeaderSection>
            <StyledMain>
                <BackToTop />
                <ProseWrapper>
                    <MDXRemote {...source} components={components} />
                    {backlinks.length ? (
                        <Backlinks backlinks={backlinks} />
                    ) : null}
                </ProseWrapper>
            </StyledMain>
            <TwitterReply
                url={`https://maggieappleton.com/${slug}/`}
                title={frontMatter.title}
            />
        </>
    );
}

const TitleContainer = styled.div`
    padding: var(--space-24) 0 var(--space-48);
    border-bottom: 1px solid var(--color-tinted-cream);
    h1 {
        font-size: var(--font-size-2xl);
        line-height: var(--leading-tighter);
    }
    p {
        font-size: var(--font-size-md);
        margin: var(--space-24) 0 0 0;
        color: var(--color-gray-600);
    }
`;

const HeaderSection = styled.header`
    max-width: 800px;
    margin: var(--space-24) auto 0;
    div.above-title {
        a,
        p {
            display: inline-block;
            font-family: var(--font-sans);
            font-size: var(--font-size-xs);
            text-transform: uppercase;
            letter-spacing: 0.05em;
            font-weight: bold;
            padding-right: var(--space-16);
        }
        p {
            padding-left: var(--space-12);
        }
        svg {
            position: relative;
            top: 3px;
        }
    }

    @media ${breakpoints.mediaSM} {
        padding: 0 var(--space-16);
    }
`;

const Metadata = styled.div`
    justify-content: space-between;
`;

const StyledMain = styled.main`
    margin-top: var(--space-16);
    padding: var(--space-64) 0;
    background: linear-gradient(var(--color-cream) 0, white 110px);
    grid-column: 1/4 !important;
    width: 100%;
    @media ${breakpoints.mediaSM} {
        padding: var(--space-80) var(--space-16);
    }
`;
