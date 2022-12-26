'use client';

import { getCityFromClient } from '@/lib/data';
import { CityType } from '@/types/CityType';
import { Card, CardSkeleton } from '@/ui/card';
import { constructPath } from '@/utils/slugify';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import RequestLocation from './RequestLocation';

export default function UserLocation() {
  const [loading, setLoading] = useState(true);
  const [userCity, setUserCity] = useState<CityType | null>(null);
  const [isPermissionDenied, setPermission] = useState(false);

  useEffect(() => {
    const permissions = navigator.permissions;

    if (!permissions) {
      setLoading(false);
      return;
    }

    permissions
      ?.query({ name: 'geolocation' })
      .then((res) => {
        if (res.state === 'granted') {
          getLocation();
          return;
        }

        setLoading(false);

        if (res.state === 'denied') {
          setPermission(true);
          return;
        }
      })
      .catch((error) =>
        console.log('[error in navigator.permissions.query]: ', error)
      );
  }, []);

  const getLocation = () =>
    navigator.geolocation?.getCurrentPosition(
      (position) => {
        const {
          coords: { latitude, longitude },
        } = position;

        setLoading(true);

        getCityFromClient(`lat=${latitude}&lon=${longitude}`)
          .then((data) => {
            setLoading(false);

            setUserCity(data);
          })
          .catch((error) => {
            setLoading(false);
            console.log(error);
          });
      },
      (error) => {
        setLoading(false);
        setPermission(true);
        console.log(
          '[error in navigator.geolocation.getCurrentPosition]: ',
          error
        );
      }
    );

  return loading ? (
    <section className="mb-4">
      <CardSkeleton current />
    </section>
  ) : userCity ? (
    <section className="mb-4">
      <Link
        href={`/${constructPath(
          userCity.name,
          userCity.sys.country,
          userCity.coord.lat,
          userCity.coord.lon
        )}`}
      >
        <Card city={userCity} current />
      </Link>
    </section>
  ) : (
    <RequestLocation
      requestPermission={isPermissionDenied ? undefined : getLocation}
    />
  );
}
