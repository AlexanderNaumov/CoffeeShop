package me.haymob.shop.android.components

import androidx.compose.foundation.layout.*
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.ArrowBackIos
import androidx.compose.material.icons.filled.ArrowForwardIos
import androidx.compose.runtime.Composable
import androidx.compose.runtime.rememberCoroutineScope
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import com.google.accompanist.pager.ExperimentalPagerApi
import com.google.accompanist.pager.HorizontalPager
import com.google.accompanist.pager.rememberPagerState
import kotlinx.coroutines.launch

@Composable
@ExperimentalPagerApi
fun ProductImages(images: List<String>) {
    val pagerState = rememberPagerState()
    val scope = rememberCoroutineScope()

    Box {
        HorizontalPager(images.count(), state = pagerState) { page ->
            ProductImage(images[page])
        }
        if (images.count() > 1) {
            Row(
                horizontalArrangement = Arrangement.SpaceBetween,
                verticalAlignment = Alignment.Bottom,
                modifier = Modifier.fillMaxSize()
            ) {
                IconButtonWithBackground(
                    Icons.Filled.ArrowBackIos,
                    pagerState.currentPage > 0
                ) {
                    scope.launch {
                        pagerState.animateScrollToPage(pagerState.currentPage - 1)
                    }
                }
                IconButtonWithBackground(
                    Icons.Filled.ArrowForwardIos,
                    pagerState.currentPage < images.count() - 1
                ) {
                    scope.launch {
                        pagerState.animateScrollToPage(pagerState.currentPage + 1)
                    }
                }
            }
        }
    }
}