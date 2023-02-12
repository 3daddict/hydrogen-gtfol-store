import clsx from 'clsx';
import {flattenConnection, Image, Money, useMoney} from '@shopify/hydrogen';
import {Text, Link, AddToCartButton} from '~/components';
import {isDiscounted, isNewArrival} from '~/lib/utils';
import {getProductPlaceholder} from '~/lib/placeholders';

export function ProductCard({
  product,
  label,
  className,
  loading,
  onClick,
  quickAdd,
}) {
  let cardLabel;

  const cardProduct = product?.variants ? product : getProductPlaceholder();
  if (!cardProduct?.variants?.nodes?.length) return null;

  const firstVariant = flattenConnection(cardProduct.variants)[0];

  if (!firstVariant) return null;
  const {image, price, compareAtPrice} = firstVariant;

  if (label) {
    cardLabel = label;
  } else if (isDiscounted(price, compareAtPrice)) {
    cardLabel = 'Sale';
  } else if (isNewArrival(product.publishedAt)) {
    cardLabel = 'New';
  }

  const productAnalytics = {
    productGid: product.id,
    variantGid: firstVariant.id,
    name: product.title,
    variantName: firstVariant.title,
    brand: product.vendor,
    price: firstVariant.price.amount,
    quantity: 1,
  };

  return (
    <div className="flex flex-col gap-2">
      <Link
        onClick={onClick}
        to={`/products/${product.handle}`}
        prefetch="intent"
      >
        <div className={clsx('grid', className)}>
          <div className="card-image aspect-[4/5] bg-primary/5">
            {image && (
              <div className="w-full overflow-hidden bg-gray-100 rounded-lg aspect-w-1 aspect-h-1 group-hover:opacity-75">
                <Image
                  className="object-cover object-center w-full h-full fadeIn"
                  widths={[320]}
                  sizes="320px"
                  loaderOptions={{
                    crop: 'center',
                    scale: 2,
                    width: 320,
                    height: 400,
                  }}
                  data={image}
                  alt={image.altText || `Picture of ${product.title}`}
                  loading={loading}
                />
              </div>
            )}
            {/* BADGE */}
            <Text
              as="label"
              size="fine"
              className="absolute top-0 right-0 m-4 text-right text-notice"
            >
              {cardLabel}
            </Text>
          </div>
          <div className="relative flex justify-between mt-4 space-x-8 text-base font-medium text-gray-900">
            <h3 className="text-sm hover:text-gray-500">
              <Link to={`/products/${product.handle}`}>
                <span aria-hidden="true" />
                {product.title}
              </Link>
            </h3>
            <Text className="flex text-gray-900 hover:text-gray-500">
              <Money
                withoutTrailingZeros
                data={price}
                className="text-2xl font-thin"
              />
              {isDiscounted(price, compareAtPrice) && (
                <CompareAtPrice
                  className={'ml-2 opacity-50 font-normal'}
                  data={compareAtPrice}
                />
              )}
            </Text>
          </div>
          {product.variants.nodes && (
            <p className="mb-8 text-sm text-gray-500 hover:text-gray-700">
              {product.variants.nodes[0].selectedOptions[0].value}
            </p>
          )}
        </div>
      </Link>
      {quickAdd && (
        <AddToCartButton
          lines={[
            {
              quantity: 1,
              merchandiseId: firstVariant.id,
            },
          ]}
          variant="secondary"
          className="mt-2"
          analytics={{
            products: [productAnalytics],
            totalValue: parseFloat(productAnalytics.price),
          }}
        >
          <Text as="span" className="flex items-center justify-center gap-2">
            Add to Bag
          </Text>
        </AddToCartButton>
      )}
    </div>
  );
}

function CompareAtPrice({data, className}) {
  const {currencyNarrowSymbol, withoutTrailingZerosAndCurrency} =
    useMoney(data);

  const styles = clsx(className);

  return (
    <s className={styles}>
      {currencyNarrowSymbol}
      {withoutTrailingZerosAndCurrency}
      <span
        className={
          "absolute top-1/2 text-red-500 opacity-70 content '' w-110% h-0.5 rounded-sm left-5% whitespace-nowrap block transform -rotate-15"
        }
      ></span>
    </s>
  );
}
