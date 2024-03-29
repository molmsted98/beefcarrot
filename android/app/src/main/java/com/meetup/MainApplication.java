package com.meetup;

import android.app.Application;

import com.facebook.react.ReactApplication;
import io.invertase.firebase.RNFirebasePackage;
import io.invertase.firebase.firestore.RNFirebaseFirestorePackage;
import com.swmansion.gesturehandler.react.RNGestureHandlerPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;

import org.unimodules.adapters.react.ReactAdapterPackage;
import org.unimodules.adapters.react.ModuleRegistryAdapter;
import org.unimodules.adapters.react.ReactModuleRegistryProvider;
import org.unimodules.core.interfaces.Package;
import org.unimodules.core.interfaces.SingletonModule;
import expo.modules.constants.ConstantsPackage;
import expo.modules.permissions.PermissionsPackage;
import expo.modules.filesystem.FileSystemPackage;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {
		private final ReactModuleRegistryProvider mModuleRegistryProvider = new ReactModuleRegistryProvider(Arrays.<Package>asList(
						new ReactAdapterPackage(),
						new ConstantsPackage(), new PermissionsPackage(), new FileSystemPackage()
		), Arrays.<SingletonModule>asList());

		private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
				@Override
				public boolean getUseDeveloperSupport() {
						return BuildConfig.DEBUG;
				}

				@Override
				protected List<ReactPackage> getPackages() {
						return Arrays.<ReactPackage>asList(
										new MainReactPackage(),
										new RNFirebasePackage(),
										new RNFirebaseFirestorePackage(),
										new RNGestureHandlerPackage(),
										new ModuleRegistryAdapter(mModuleRegistryProvider)
						);
				}

				@Override
				protected String getJSMainModuleName() {
						return "index";
				}
		};

		@Override
		public ReactNativeHost getReactNativeHost() {
				return mReactNativeHost;
		}

		@Override
		public void onCreate() {
				super.onCreate();
				SoLoader.init(this, /* native exopackage */ false);
		}
}
